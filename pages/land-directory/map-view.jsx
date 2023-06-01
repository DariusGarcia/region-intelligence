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
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!session) {
        Router.push('/login')
      }
    }, 100) // 0.1 seconds (100 milliseconds)
    return () => clearTimeout(timeout)
  }, [session])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
  })

  const [selectedMarker, setSelectedMarker] = useState(null)
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false)
  const [selectedMarkerData, setSelectedMarkerData] = useState(null)
  const [permitData, setPermitData] = useState([])
  const [permitCoord, setPermitCoord] = useState([])
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
      return
    }

    setPermitData(data)
    getCoordinates(data)
  }

  // async function getCoordinates(permitData) {
  //   const permitDataWithGeolocation = []

  //   permitData?.map(async (permit) => {
  //     const { projectLocations } = permit
  //     const response = await fetch(
  //       `https://maps.googleapis.com/maps/api/geocode/json?address=${formatAddressForGeocoding(
  //         projectLocations
  //       )},+${permit.city},+CA&key=${process.env.NEXT_PUBLIC_GEOCODE_API_KEY}`
  //     )

  //     const data = await response.json()
  //     const geolocation = data.results[0]?.geometry?.location

  //     permitDataWithGeolocation.push({
  //       ...permit,
  //       lat: geolocation?.lat,
  //       lng: geolocation?.lng,
  //     })
  //   })

  //   setPermitCoord(permitDataWithGeolocation)
  //   console.log({ permitCoord: permitCoord })
  // }

  async function getCoordinates(permitData) {
    const permitDataWithGeolocation = await Promise.all(
      permitData.map(async (permit) => {
        const { projectLocations } = permit
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${formatAddressForGeocoding(
            projectLocations
          )},+${permit.city},+CA&key=${process.env.NEXT_PUBLIC_GEOCODE_API_KEY}`
        )

        const data = await response.json()
        const geolocation = data.results[0]?.geometry?.location

        return {
          ...permit,
          lat: geolocation?.lat,
          lng: geolocation?.lng,
        }
      })
    )

    setPermitCoord(permitDataWithGeolocation)
  }
  useEffect(() => {
    setLoading(true)
    fetchPermits()
    setLoading(false)
    console.log({ permitCoord: permitCoord })
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
        {permitCoord && !isLoading && (
          <>
            <Head>
              <title>First Property - Maps</title>
            </Head>
            <div className='w-full flex flex-col justify-center mt-8 md:mt-12 px-2 md:px-8'>
              <h1 className='flex justify-center font-bold text-2xl mb-8'>
                Pending permits locations
              </h1>
              <GoogleMap
                center={
                  selectedMarker
                    ? { lat: selectedMarker.lat, lng: selectedMarker.lng }
                    : { lat: 33.8036758, lng: -117.9119473 }
                }
                zoom={13}
                options={{ mapTypeId: 'hybrid' }}
                mapContainerStyle={{
                  margin: '20px 0 0',
                  height: '70vh',
                  width: '100%',
                  borderRadius: '8px',
                }}
              >
                {permitCoord?.map((permit) => (
                  <Marker
                    key={permit.id}
                    position={{
                      lat: Number(permit?.lat),
                      lng: Number(permit?.lng),
                    }}
                    onClick={() =>
                      handleMarkerClick({
                        applicant: permit.applicant,
                        applicantEmail: permit.applicantEmail,
                        applicantPhone: permit.applicantPhone,
                        caseNumbers: permit.caseNumbers,
                        city: permit.city,
                        created_at: permit.created_at,
                        id: permit.id,
                        imageUrls: permit.imageUrls,
                        lat: permit.lat,
                        listingNames: permit.listingNames,
                        lng: permit.lng,
                        plannerEmail: permit.plannerEmail,
                        plannerName: permit.plannerName,
                        plannerPhone: permit.plannerPhone,
                        projectDescriptions: permit.projectDescriptions,
                        projectLocations: permit.projectLocations,
                        projectStatus: permit.projectStatus,
                        recentUpdate: permit.recentUpdate,
                        typeOfUse: permit.typeOfUse,
                      })
                    }
                  />
                ))}
                {selectedMarker && (
                  <InfoWindow
                    position={{
                      lat: selectedMarker.lat,
                      lng: selectedMarker.lng,
                    }}
                    onCloseClick={handleInfoWindowClose}
                    onClick={() =>
                      handleMarkerClick({
                        applicant,
                        applicantEmail,
                        applicantPhone,
                        caseNumbers,
                        city,
                        created_at,
                        id,
                        imageUrls,
                        lat,
                        listingNames,
                        lng,
                        plannerEmail,
                        plannerName,
                        plannerPhone,
                        projectDescriptions,
                        projectLocations,
                        projectStatus,
                        recentUpdate,
                        typeOfUse,
                      })
                    }
                  >
                    <article className='flex flex-col gap-2 pb-4 md:pb-0 md:pr-0 pr-2 w-full'>
                      <p>{selectedMarker.caseNumbers}</p>
                      <p>{selectedMarker.listingNames}</p>
                      <p>Address: {selectedMarker.projectLocations}</p>
                      <p>Applicant: {selectedMarker.applicant}</p>
                      <p>Planner's name: {selectedMarker.plannerName}</p>
                      <p>Planner's email: {selectedMarker.plannerEmail}</p>
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
        )}
      </>
    )
  }

  return isLoaded && permitCoord?.length > 0 && !isLoading ? (
    renderMap()
  ) : (
    <div className='flex justify-center my-24'>
      <BounceLoader color='#0d6efd' />
    </div>
  )
}
