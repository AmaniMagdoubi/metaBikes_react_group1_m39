import React from "react"
import "../index.css"; //Golbal styles
import {GolbalWrapper, LeftSpace, RightMainWrapper, Row} from "../styles/global.styles.js"; //Golbal wrapper styles
import {JourneyWrapper} from "../styles/7-journey-planner.styles";

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
  
    

  return (
    <GolbalWrapper>
            <LeftSpace></LeftSpace>
            <RightMainWrapper>

                <JourneyWrapper>
                <div className="Journey_wrapper">
                    <div className="map_wrapper">

                        <div className="display_wrapper">
                            <div className="display_top">
                            <Row>
                                <span>From: {}</span>
                                <span>To: {}</span>
                                <span>Distance: {}</span>
                            </Row>
                            </div>
                        </div>





                        <div className="map">

                        <Box position='absolute' left={0} top={0} h='100vh' w='100vh'>

        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={12}
          mapContainerStyle={{ width: '100vh', height: '100vh' }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='1'
      >
        <HStack spacing={2} justifyContent='space-between'>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input type='text' placeholder='Origin' ref={originRef} />
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center)
              map.setZoom(12)
            }}
          />
        </HStack>
      </Box>


                        </div>








                        <div className="weather_wrapper">
                            <div className="weather_from"></div>
                            <div className="arrow"></div>
                            <div className="weather_to"></div>
                        </div>

                    </div>
                    <div className="input_wrapper">
                        <div className="input">
                            <form>
                                <input></input>
                                <input></input>
                            </form>
                        </div>
                        <div className="results">
                            <div className="results_img"></div>
                        </div>
                    </div>
                </div>
                </JourneyWrapper>

            </RightMainWrapper>
        </GolbalWrapper>

    

  )
}

export default JourneyPlanner;