import {useMemo} from 'react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'

const mapContainerStyle = {
  width: '100vh',
  height: '100vh',
};

const center = { lat: 48.8584, lng: 2.2945 };

export default function HomePage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />
};

function Map() {
  return <GoogleMap
    zoom={10}
    center={center}
    mapContainerStyle={mapContainerStyle}>
  </GoogleMap>
}
