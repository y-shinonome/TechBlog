import type { NextPage } from 'next'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import Map from '../components/map'
import Marker from '../components/marker'

const MapSample: NextPage = () => {
  const render = (status: Status) => {
    return <h1>{status}</h1>
  }
  const center = { lat: 35.6809591, lng: 139.7673068 }
  const positions = [
    { lat: 35.6809591, lng: 139.7673068 },
    { lat: 35.698383, lng: 139.773072 },
    { lat: 35.666348, lng: 139.758155 },
  ]
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <Wrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        render={render}
      >
        <Map
          center={center}
          zoom={14}
          style={{ height: '100%', width: '100%' }}
        >
          {positions.map((position, index) => (
            <Marker key={index} position={position} />
          ))}
        </Map>
      </Wrapper>
    </div>
  )
}

export default MapSample
