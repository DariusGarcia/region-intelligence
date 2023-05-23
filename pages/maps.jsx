import React from 'react'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import randomCoord from '@/data/randomCoord'
import PermitsTable from '@/components/maps/table'

export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
  })

  const renderMap = () => {
    return (
      <div className='w-full flex flex-col justify-center mt-8 md:mt-24 px-4'>
        <h1 className='flex justify-center font-bold text-2xl mb-8'>
          Pending permits locations
        </h1>
        <GoogleMap
          center={{ lat: 33.611263, lng: -117.91887 }}
          zoom={12}
          mapContainerStyle={{
            margin: '20px 0 0',
            height: '70vh',
            width: '100%',
            borderRadius: '8px',
          }}
        >
          {randomCoord.map(([name, lat, lng]) => (
            <Marker key={name} position={{ lat, lng }} />
          ))}
        </GoogleMap>
        <div className='mt-24 mx-4 '>
          <PermitsTable />
        </div>
      </div>
    )
  }

  return isLoaded ? renderMap() : null
}
