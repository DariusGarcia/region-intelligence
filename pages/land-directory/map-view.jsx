import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { createClient } from '@supabase/supabase-js'
import { useSession } from '@supabase/auth-helpers-react'
import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'
import SlideOver from '@/components/navbar/slideOver'
import PermitsTable from '@/components/maps/table'
import randomCoord from '@/data/randomCoord'
import { BounceLoader } from 'react-spinners'
import formatAddressForGeocoding from '@/utils/formatAddressForGeocoding'

export default function MapsPage() {
  const session = useSession()
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!session) {
        Router.push('/login')
      }
    }, 100) // Delay of 0.1 seconds (100 milliseconds)
    return () => clearTimeout(timeout) // Cleanup the timeout on component unmount
  }, [session])

  const [selectedMarker, setSelectedMarker] = useState(null)
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false)
  const [selectedMarkerData, setSelectedMarkerData] = useState(null)
  const [permitData, setPermitData] = useState({})
  const [permitCoord, setPermitCoord] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
  async function fetchPermits() {
    const { data, error } = await supabase.from('cityProjects').select()
    if (error) {
      setError(error)
      setLoading(false)
      return
    }
    if (data) {
      setPermitData(data)
      setLoading(false)
    }
  }

  async function getCoordinates(permitData) {
    const permitDataWithGeolocation = []

    permitData?.map(async (permit) => {
      const { projectLocations } = permit
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${formatAddressForGeocoding(
          projectLocations
        )},+${permit.city},+CA&key=${process.env.NEXT_PUBLIC_GEOCODE_API_KEY}`
      )

      const data = await response.json()
      const geolocation = data.results[0]?.geometry?.location

      permitDataWithGeolocation.push({ ...permit, geolocation })
      // permitDataWithGeolocation.push({ ...permit, projectLocations })
    })

    setPermitCoord(permitDataWithGeolocation)
  }

  console.log({ updatedPermitData: permitCoord })
  useEffect(() => {
    setLoading(true)
    fetchPermits()
    getCoordinates(permitData)
    setLoading(false)
  }, [])

  const handleMarkerClick = (markerData) => {
    setSelectedMarkerData(markerData)
    setSelectedMarker(markerData)
    setIsSlideOverOpen(true)
  }

  const handleInfoWindowClose = () => {
    setSelectedMarker(null)
  }

  if (isLoading)
    return (
      <div className='flex justify-center my-24'>
        <BounceLoader color='#0d6efd' />
      </div>
    )

  const renderMap = () => {
    return (
      <>
        <Head>
          <title>First Property - Maps</title>
        </Head>
        <div className='w-full flex flex-col justify-center mt-8 md:mt-12 px-2 md:px-8'>
          <h1 className='flex justify-center font-bold text-2xl mb-8'>
            Pending permits locations
          </h1>
          <GoogleMap
            center={{ lat: 33.611263, lng: -117.91887 }}
            zoom={12}
            options={{ mapTypeId: 'hybrid' }}
            mapContainerStyle={{
              margin: '20px 0 0',
              height: '70vh',
              width: '100%',
              borderRadius: '8px',
            }}
          >
            {randomCoord.map(
              ([
                name,
                lat,
                lng,
                ownerName,
                phoneNumber,
                lotSize,
                projectStatus,
                lastUpdate,
                listingName,
                location,
                description,
              ]) => (
                <Marker
                  key={name}
                  position={{ lat, lng }}
                  onClick={() =>
                    handleMarkerClick({
                      name,
                      lat,
                      lng,
                      ownerName,
                      phoneNumber,
                      lotSize,
                      projectStatus,
                      lastUpdate,
                      listingName,
                      location,
                      description,
                    })
                  }
                />
              )
            )}
            {selectedMarker && (
              <InfoWindow
                position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                onCloseClick={handleInfoWindowClose}
                onClick={() =>
                  handleMarkerClick({
                    name,
                    lat,
                    lng,
                    ownerName,
                    phoneNumber,
                    lotSize,
                    projectStatus,
                    lastUpdate,
                    listingName,
                    location,
                    description,
                  })
                }
              >
                <article className='flex flex-col gap-2 pb-4 md:pb-0 md:pr-0 pr-2 w-full'>
                  <p>{selectedMarker.name}</p>
                  <p>{selectedMarker.ownerName}</p>
                  <p>{selectedMarker.phoneNumber}</p>
                  <p>Lot size: {selectedMarker.lotSize}</p>
                  <p>Status: {selectedMarker.projectStatus}</p>
                </article>
              </InfoWindow>
            )}
          </GoogleMap>
          <SlideOver
            isOpen={isSlideOverOpen}
            onClose={() => setIsSlideOverOpen(!isSlideOverOpen)}
            markerData={selectedMarkerData}
          />
          <div className='mt-24 w-full '>
            <PermitsTable />
          </div>
        </div>
      </>
    )
  }

  return isLoaded ? renderMap() : null
}
