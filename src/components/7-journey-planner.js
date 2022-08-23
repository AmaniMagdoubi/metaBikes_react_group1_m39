import React from "react"
import "../index.css"; //Global styles
import {GlobalWrapper, LeftSpace, RightMainWrapper, Row} from "../styles/global.styles.js"; //Global wrapper styles
import {JourneyWrapper} from "../styles/7-journey-planner.styles";
//https://react-google-maps-api-docs.netlify.app/
import Weather from "./19-weatherApp";

import {
    Box,
    Button,
    ButtonGroup,
    HStack,
    IconButton,
    Input,
    Text,
  } from '@chakra-ui/react'
  import { FaLocationArrow, FaTimes } from 'react-icons/fa'
  
  import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'
  import { useRef, useState } from 'react'
  
  const center = { lat: 53.48368749923018, lng: -2.246122150819447 }
  
  function JourneyPlanner() {
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
      libraries: ['places'],
    })
  
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
  
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()
  
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
  
    async function calculateRoute() {
      if (originRef.current.value === '' || destiantionRef.current.value === '') {
        return
      }
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService()
      const results = await directionsService.route({
        origin: originRef.current.value,
        destination: destiantionRef.current.value,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      })
      setDirectionsResponse(results)
      setDistance(results.routes[0].legs[0].distance.text)
      setDuration(results.routes[0].legs[0].duration.text)
    }
  
    function clearRoute() {
      setDirectionsResponse(null)
      setDistance('')
      setDuration('')
      originRef.current.value = ''
      destiantionRef.current.value = ''
    }

      const mapContainerStyle = {
        Maxwidth: '100vh',
        height: '45vh',
        };

        
  
    

  return (
    <GlobalWrapper>
            <LeftSpace></LeftSpace>
            <RightMainWrapper>

                <JourneyWrapper>
                <div className="Journey_wrapper">

                  <div className="text_wrapper">
                    <h1>Plan your journey</h1>
                    <p></p>
                  </div>
                    
                  <div className="display_top">

                        <HStack className="input_wrapper">

                            <div className="from_wrapper">
                              <Autocomplete>
                                <Input className="from_input"
                                  type='text' 
                                  placeholder='From:' 
                                  ref={originRef} 
                                />
                              </Autocomplete>
                            </div>

                            <div className="to_wrapper">
                              <Autocomplete>
                                <Input className="to_input"
                                  type='text'
                                  placeholder='To:'
                                  ref={destiantionRef}
                                />
                              </Autocomplete>
                            </div>

                            <div className="button_wrapper"> 
                            <div className="button">
                              <Button 
                                type='submit' 
                                onClick={calculateRoute}>
                                <p>Calculate Route</p>
                              </Button>
                            </div>

                              
                            <div className="button">
                              <IconButton
                                aria-label='center back'
                                icon={<FaTimes />}
                                onClick={clearRoute}
                              />
                            </div>
                            </div>

                            <div className="output_wrapper">
                            
                              <div className="output"><Text>Distance: {distance} </Text></div>
                              <div className="output"><Text>Duration: {duration} </Text></div>

                              <div className="icon"><IconButton
                                  aria-label='center back'
                                  icon={<FaLocationArrow />}
                                  isRound
                                  onClick={() => {
                                    map.panTo(center)
                                    map.setZoom(12)
                                  }}
                                /></div>

                            </div>

                        </HStack>

                        

                  </div>


                  <div className="display_middle">



                    <div className="map_wrapper">
                      
                        <GoogleMap id="map"
                        // className="map"
                        center={center}
                        zoom={12}
                        mapContainerStyle={mapContainerStyle}
                        onLoad={map => setMap(map)}
                        >

                        <Marker position={center} />
                        {directionsResponse && ( <DirectionsRenderer directions={directionsResponse} />)}

                        </GoogleMap>

                      
                    </div>



                  </div>

                        
                  <div className="display_bottom">
                    <Weather /> 
                  </div>

                </div>
                </JourneyWrapper> 
    </RightMainWrapper> 
  </GlobalWrapper>
  )
}

export default JourneyPlanner;




{/* <div className="weather_wrapper">
                      <div className="weather_from"></div>
                      <div className="arrow"></div>
                      <div className="weather_to"></div>
                  </div> */}



                   {/* <div className="input_wrapper">
                  <div className="input">
                      <form>
                          <input></input>
                          <input></input>
                      </form>
                  </div>
                  <div className="results">
                      <div className="results_img"></div>
                  </div>
              </div> */}