import React, { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import Map, { Marker } from 'react-map-gl'
import geoJson from '../features/ceqaMap/chicago.json'

export default function CeqaMapPage() {
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)

  // const mapContainer = useRef(null)
  // const map = useRef(null)

  // useEffect(() => {
  //   if (map.current) return // initialize map only once
  //   mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? ''
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/dariusgarcia8/cliwq37qt00f401pz0lqg9shz',
  //     center: [-87.70199, 41.905423],
  //     zoom: zoom,
  //   })

  //   // Add navigation control (the +/- zoom buttons)
  //   map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')

  //   // Clean up on unmount
  //   return () => map.current.remove()
  // }, [])

  // useEffect(() => {
  //   if (!map.current) return // wait for map to initialize
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4))
  //     setLat(map.current.getCenter().lat.toFixed(4))
  //     setZoom(map.current.getZoom().toFixed(2))
  //   })
  // })

  const markerClicked = (title) => {
    window.alert(title)
  }

  return (
    <main className='h-screen w-screen'>
      <div className='sidebar'>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      {/* <div className='h-screen w-screen' ref={mapContainer}></div> */}
      <Map
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14,
        }}
        className='h-screen w-screen'
        mapStyle='mapbox://styles/dariusgarcia8/cliwq37qt00f401pz0lqg9shz'
        mapboxAccessToken={
          'pk.eyJ1IjoiZGFyaXVzZ2FyY2lhOCIsImEiOiJjbGl3b3kxMHMwMDE2M3F1dXA5eWhlNjgyIn0.jh9FlFfdGo4RtL2l5Zdgcw'
        }>
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
