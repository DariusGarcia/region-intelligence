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
import CitySelectMenu from '@/components/selectMenus/citySelectMenu'
import { BounceLoader } from 'react-spinners'
import DataTable from '@/components/maps/dataTable'
import image from '@/public/home.jpg'
import homeImg from '@/public/map-view.png'
import Image from 'next/image'

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
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [cities, setCities] = useState(['All'])
  const [selectedCity, setSelectedCity] = useState('')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = permitData.map((img) => img.imageUrls)
  console.log(images)
  console.log({
    currentImageIndex: currentImageIndex,
    url: images[currentImageIndex],
  })
  useEffect(() => {
    setLoading(true)
    fetchPermits()
    fetchCities()
    setLoading(false)
  }, [selectedCity])

  async function fetchPermits() {
    if (selectedCity === 'All cities' || selectedCity === '') {
      const { data, error } = await supabase.from('cityProjects').select('*')
      if (error) {
        setError(error)
        return
      }
      setPermitData(data)
    } else {
      const { data, error } = await supabase
        .from('cityProjects')
        .select('*')
        .eq('city', selectedCity)
      if (error) {
        setError(error)
        return
      }
      setPermitData(data)
    }
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

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight

    const scrollPercentage = scrollPosition / windowHeight
    const newIndex = Math.floor(scrollPercentage * images.length)

    setCurrentImageIndex(newIndex)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (error)
    return (
      <p className='flex w-full justify-center text-center items-center font-medium'>
        {error.message}
      </p>
    )

  const renderMap = () => {
    return (
      <>
        {permitData[0].lat !== 0 && !isLoading && (
          <>
            <Head>
              <title>First Property - Maps</title>
            </Head>
            <div className='w-full flex flex-col justify-center mt-8 md:mt-12 px-2 md:px-8'>
              <h1 className='flex justify-center font-bold text-3xl mb-8'>
                City project locations
              </h1>
              <div className='flex justify-center w-full items-center z-40'>
                <div className='flex flex-col w-72'>
                  <CitySelectMenu
                    onSelect={handleCitySelection}
                    cities={['All cities', ...cities]}
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
                    height: '50vh',
                    width: '100%',
                    borderRadius: '8px',
                    position: 'fixed',
                    // top: '10',
                    // left: '0',
                    right: '0',
                    bottom: '0',
                    zIndex: '3',
                  }}
                >
                  {permitData.length > 0 &&
                    permitData?.map((permit) => (
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
                      }
                    >
                      <article
                        id={selectedMarker.id}
                        className='flex flex-col gap-2 pb-4 md:pb-0 md:pr-0 pr-2 w-full'
                      >
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
                {permitData && (
                  <div className='image-overlay '>
                    <img
                      src={images[currentImageIndex]}
                      alt='Image'
                      width={800}
                      height={800}
                      objectFit='cover'
                    />
                  </div>
                )}
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
