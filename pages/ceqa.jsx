import React, { useState, useEffect, useRef } from 'react'
import Map, { Marker } from 'react-map-gl'
import geoJson from '../features/ceqaMap/chicago.json'

export default function CeqaMapPage() {
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)

  const map = useRef(null)

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? ''
  return (
    <main className='h-[80vh] w-full md:px-8 mt-6 md:mt-12 cursor-grab'>
      <h1 className='flex justify-center text-3xl font-semibold mb-4'>CEQA</h1>
      {/* <div className='sidebar'>
        Longitude: {mapViewport.longitude} | Latitude: {mapViewport.latitude} |
        Zoom: {mapViewport.zoom}
      </div> */}
      <Map
        ref={map}
        initialViewState={{
          latitude: 33.78,
          longitude: -117.85,
          zoom: 12,
        }}
        className='h-full w-full'
        mapStyle='mapbox://styles/dariusgarcia8/cliwq37qt00f401pz0lqg9shz'
        mapboxAccessToken={mapboxToken}>
        <Marker longitude={-122.4} latitude={37.8} color='red' />
      </Map>
    </main>
  )
}

// const Marker = ({ onClick, feature }) => {
//   const markerClicked = () => {
//     onClick(feature.properties.description)
//   }

//   return (
//     <button onClick={markerClicked} className='marker text-red-500'>
//       {feature.properties.description}
//     </button>
//   )
// }
