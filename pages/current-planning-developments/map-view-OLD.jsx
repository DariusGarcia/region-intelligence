import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { createClient } from '@supabase/supabase-js'
import { useSession } from '@supabase/auth-helpers-react'
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api'
import SlideOver from '@/components/navbar/slideOver'
import CitySelectMenu from '@/components/selectMenus/citySelectMenu'
import { BounceLoader } from 'react-spinners'
import DataTable from '@/components/dataTables/dataTable'
import ErrorPage from '../error'
import StatusSelectMenu from '@/components/selectMenus/statusSelectMenu'

export default function MapsPage() {
  const session = useSession()
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!session) {
        Router.push('/login')
      }
    }, 100)
    return () => clearTimeout(timeout)
  }, [session])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
  })

  const [selectedMarker, setSelectedMarker] = useState(null)
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false)
  const [selectedMarkerData, setSelectedMarkerData] = useState(null)
  const [permitData, setPermitData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [cities, setCities] = useState(['All'])
  const [projectStatuses, setProjectStatuses] = useState(['All'])
  const [selectedCity, setSelectedCity] = useState('All cities')
  const [selectedProjectStatus, setSelectedProjectStatus] = useState('All')
  // const [currentImageIndex, setCurrentImageIndex] = useState(0)

  console.log(projectStatuses)
  useEffect(() => {
    setLoading(true)
    fetchPermits()
    fetchCities()
    fetchProjectStatuses()
    setLoading(false)
  }, [selectedCity, selectedProjectStatus])

  async function fetchPermits() {
    let permitQuery = supabase.from('cityProjects').select('*')
    if (selectedCity !== 'All cities') {
      permitQuery = permitQuery.eq('city', selectedCity)
    }
    if (selectedProjectStatus !== 'All') {
      permitQuery = permitQuery.eq('projectStatus', selectedProjectStatus)
    }
    const { data, error } = await permitQuery
    if (error) {
      setError(error)
      return
    }
    setPermitData(data)
  }

  async function fetchCities() {
    const { data, error } = await supabase.from('cityProjects').select('city')
    if (error) {
      setError(error)
      return
    }
    const distinctCities = Array.from(new Set(data.map((city) => city.city)))
    setCities(distinctCities)
  }

  async function fetchProjectStatuses() {
    let projectStatusQuery = supabase
      .from('cityProjects')
      .select('projectStatus')

    if (selectedCity !== 'All cities') {
      projectStatusQuery = projectStatusQuery.eq('city', selectedCity)
    }
    const { data, error } = await projectStatusQuery
    if (error) {
      setError(error)
      return
    }
    const distinctProjectStatuses = Array.from(
      new Set(data.map((status) => status.projectStatus))
    )
    setProjectStatuses(distinctProjectStatuses)
  }

  const handleMarkerClick = (markerData) => {
    setSelectedMarkerData(markerData)
    setSelectedMarker(markerData)
    setIsSlideOverOpen(true)
  }

  const handleInfoWindowClose = () => {
    setSelectedMarker(null)
  }

  function handleCitySelection(city) {
    setSelectedCity(city)
  }

  function handleStatusSelection(status) {
    setSelectedProjectStatus(status)
    setSelectedMarker(null)
    setSelectedMarkerData(null)
  }

  if (error) return <ErrorPage errorMessage={error.message} />

  const renderMap = () => {
    return (
      <>
        {permitData[0].lat !== 0 && !isLoading && (
          <>
            <Head>
              <title>Region Intelligence - Maps</title>
            </Head>
            <div className='w-full flex flex-col justify-center mt-8 md:mt-12 px-2 md:px-8'>
              <h1 className='flex justify-center font-bold text-3xl mb-8'>
                City project locations
              </h1>
              <div className='flex flex-col md:flex-row justify-center gap-4 w-full items-center'>
                <div className='flex flex-col w-72 cursor-pointer'>
                  <CitySelectMenu
                    onSelect={handleCitySelection}
                    cities={['All cities', ...cities]}
                    className='cursor-pointer'
                  />
                </div>
                <div className='flex flex-col w-72 cursor-pointer'>
                  <StatusSelectMenu
                    onSelect={handleStatusSelection}
                    status={['All', ...projectStatuses]}
                    className='cursor-pointer'
                  />
                </div>
              </div>
              <div className='flex flex-row'>
                <GoogleMap
                  center={
                    typeof permitData[0] == 'number' && selectedMarker
                      ? {
                          lat: selectedMarker?.lat,
                          lng: selectedMarker?.lng,
                        }
                      : {
                          lat: 33.7559852,
                          lng: -117.8953888,
                        }
                  }
                  zoom={12}
                  options={{ mapTypeId: 'hybrid' }}
                  mapContainerStyle={{
                    margin: '20px 0 0',
                    height: '70vh',
                    width: '100%',
                    borderRadius: '8px',
                  }}>
                  {permitData.length > 0 &&
                    permitData?.map((permit) => (
                      <MarkerF
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
                    <InfoWindowF
                      position={{
                        lat: selectedMarker?.lat,
                        lng: selectedMarker?.lng,
                      }}
                      onCloseClick={handleInfoWindowClose}
                      onClick={() =>
                        handleMarkerClick({
                          applicant,
                          caseNumbers,
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
                      }>
                      <article
                        id={selectedMarker.id}
                        className='flex flex-col gap-2 pb-4 md:pb-0 md:pr-0 pr-2 w-full'>
                        {selectedMarker.recentUpdate === 'Undisclosed' ? (
                          ''
                        ) : (
                          <>
                            <p>
                              <span className='font-medium'>Case number: </span>
                              {selectedMarker.caseNumbers}
                            </p>
                          </>
                        )}
                        <p>
                          <span className='font-medium'>Listing name:</span>{' '}
                          {selectedMarker.listingNames}
                        </p>
                        <p>
                          <span className='font-medium'>Address:</span>{' '}
                          {selectedMarker.projectLocations}
                        </p>
                        {selectedMarker.applicant === 'Undisclosed' ? (
                          ''
                        ) : (
                          <>
                            <p>
                              <span className='font-medium'>Applicant:</span>{' '}
                              {selectedMarker.applicant}
                            </p>
                          </>
                        )}
                        {selectedMarker.plannerName === 'Undisclosed' ? (
                          ''
                        ) : (
                          <>
                            <p>
                              <span className='font-medium'>
                                Planner's name:
                              </span>{' '}
                              {selectedMarker.plannerName}
                            </p>
                          </>
                        )}
                        {selectedMarker.plannerEmail === 'Undisclosed' ? (
                          ''
                        ) : (
                          <>
                            <p>
                              <span className='font-medium'>
                                Planner's email:
                              </span>{' '}
                              {selectedMarker.plannerEmail}
                            </p>
                          </>
                        )}
                        <p>
                          <span className='font-medium'>Status:</span>{' '}
                          {selectedMarker.projectStatus}
                        </p>
                      </article>
                    </InfoWindowF>
                  )}
                </GoogleMap>
              </div>
              <SlideOver
                isOpen={isSlideOverOpen}
                onClose={() => setIsSlideOverOpen(!isSlideOverOpen)}
                markerData={selectedMarkerData}
              />
              <section className='mt-8 md:mt-24 w-full flex flex-col items-center '>
                <div>
                  <h2 className='font-bold text-3xl'>Projects Table</h2>
                  <div className=' my-4 w-56'>
                    <CitySelectMenu
                      onSelect={handleCitySelection}
                      cities={['All cities', ...cities]}
                    />
                  </div>
                  <DataTable permits={permitData} />
                </div>
              </section>
            </div>
          </>
        )}
      </>
    )
  }

  return isLoaded &&
    permitData?.length > 0 &&
    permitData?.lat !== null &&
    !isLoading ? (
    renderMap()
  ) : (
    <div className='flex justify-center my-24'>
      <BounceLoader color='#0d6efd' />
    </div>
  )
}

/**
 * Code for image slider
 */

// const handleScroll = () => {
//   const scrollPosition = window.scrollY
//   const windowHeight = window.innerHeight

//   const scrollPercentage = scrollPosition / windowHeight
//   const newIndex = Math.floor(scrollPercentage * images.length)

//   setCurrentImageIndex(newIndex)
// }

// useEffect(() => {
//   window.addEventListener('scroll', handleScroll)
//   return () => {
//     window.removeEventListener('scroll', handleScroll)
//   }
// }, [])
