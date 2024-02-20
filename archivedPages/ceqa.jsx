import CollapsibleTable from '@/components/dataTables/ceqaDataTable'
import React, { useState, useEffect, useRef } from 'react'
import Map, { Marker } from 'react-map-gl'
import geoJson from '../features/ceqaMap/chicago.json'

export default function CeqaMapPage() {
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)
  const [data, setData] = useState([])

  useEffect(() => {
    fetchCEQAData()
  }, [])

  async function fetchCEQAData() {
    const res = await fetch('/api/data/ceqa')
    if (!res.ok) {
      throw new Error(res.statusText)
    } else {
      const data = await res.json()
      setData(data)
      console.log(data)
    }
  }
  const map = useRef(null)

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? ''
  return (
    <div>
      <main className='h-[70vh]  w-full md:px-8 mt-6 md:mt-12 mb-48'>
        <h1 className='flex justify-center text-3xl font-semibold mb-4'>
          CEQA
        </h1>

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
      <div className='mx-2 relative'>
        <h1 className='ml-8 font-medium text-3xl'>CEQA Data</h1>
        <CollapsibleTable dataRows={data} />
      </div>
    </div>
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
