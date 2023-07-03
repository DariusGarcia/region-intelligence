import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { createClient } from '@supabase/supabase-js'
import { useSession } from '@supabase/auth-helpers-react'
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

  const [permitData, setPermitData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [cities, setCities] = useState(['All'])
  const [projectStatuses, setProjectStatuses] = useState(['All'])
  const [selectedCity, setSelectedCity] = useState('All cities')
  const [selectedProjectStatus, setSelectedProjectStatus] = useState('All')

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
              <title>First Property - Maps</title>
            </Head>
            <div className='w-full flex flex-col justify-center mt-8 md:mt-12 px-2 md:px-8'>
              <h1 className='flex justify-center font-bold text-3xl mb-8'>
                City Planning Guide
              </h1>
              {/* Select menus */}
              {/* <div className='flex flex-col md:flex-row justify-center gap-4 w-full items-center'>
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
              </div> */}
              {/* New map iFrame */}
              <section className='h-full w-full mt-12'>
                <iframe
                  src='https://ucirvine.maps.arcgis.com/apps/instant/sidebar/index.html?appid=c0d456660cd54723a4b760db84883624'
                  frameBorder='0'
                  className='w-full h-[90vh] rounded-md'
                  allowFullScreen>
                  iFrames are not supported on this page.
                </iframe>
              </section>
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

  return permitData?.length > 0 && permitData?.lat !== null && !isLoading ? (
    renderMap()
  ) : (
    <div className='flex justify-center my-24'>
      <BounceLoader color='#0d6efd' />
    </div>
  )
}
