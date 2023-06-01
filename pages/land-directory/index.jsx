import React, { useState } from 'react'
import Link from 'next/link'
import image from '../../public/home.jpg'
import Image from 'next/image'
import { createClient } from '@supabase/supabase-js'
import capitalizeWords from '@/utils/capitalizeWords'
import Pagination from '@/components/pagination'
import mapView from '@/public/map-view.png'
import Head from 'next/head'

export default function LandDirectoryListViewPage({ cityProjects }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPermits, setFilteredPermits] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value
    setSearchTerm(searchTerm)

    const filteredPermits = cityProjects.filter(
      (item) =>
        item.caseNumbers.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.projectLocations
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.plannerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.listingNames?.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setFilteredPermits(filteredPermits)
    setCurrentPage(1)
  }

  const permitsToDisplay = searchTerm ? filteredPermits : cityProjects

  return (
    <>
      <Head>
        <title>First Property - Home</title>
        <meta name='description' content={headerText.subtitle1Description} />
      </Head>
      <div className='flex justify-center mt-4 md:mt-12 px-4'>
        <div className='flex flex-col items-center'>
          <div className='md:max-w-7xl justify-center'>
            <h1 className='text-3xl md:text-5xl font-bold  '>
              {headerText.title}
            </h1>
            <section className='mt-8 md:mt-12 flex flex-col justify-center w-full gap-4'>
              <h2 className='text-2xl font-medium'>{headerText.subtitle1}</h2>
              <p className='max-w-xl'>{headerText.subtitle1Description}</p>
            </section>
            <section className='mt-12'>
              <h3 className='text-2xl font-medium'>{headerText.subtitle2}</h3>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-4 justify-between max-w-xl mt-4'>
                <article className='flex flex-col gap-2  justify-center p-4 border   rounded-md'>
                  <Image
                    src={mapView}
                    width={250}
                    alt='image'
                    height={200}
                    priority
                    className='flex justify-center place-items-center w-full'
                  />
                  <Link
                    href='/land-directory/map-view'
                    className='text-blue-600 hover:text-blue-500 text-xl'
                  >
                    Interactive map
                  </Link>
                  <p className=''>
                    Check out our interactive map for a list of major planning
                    projects in different cities.
                  </p>
                </article>
                <article className='flex flex-col gap-2 justify-center p-4 border  rounded-md'>
                  <Image
                    src={image}
                    width={250}
                    alt='image'
                    height={200}
                    priority
                    className='flex justify-center place-items-center w-full'
                  />
                  <Link
                    href='/land-directory'
                    className='text-blue-600 hover:text-blue-500 text-xl'
                  >
                    Monthly development project reports
                  </Link>
                  <p className=''>
                    You can find a full list of pending development projects
                    here.
                  </p>
                </article>
              </div>
            </section>
          </div>
          <div className=''>
            <section className='mt-12'>
              <div className='flex flex-col gap-4'>
                <h4 className='text-2xl font-medium'>All planning projects</h4>
                <p>
                  Click on any of the projects below to see more information.
                </p>

                {/* list of planning projects */}
                <div className='overflow-x-auto'>
                  <form className='w-full  md:max-w-7xl lg:min-w-[1200px] lg:w-[1250px] overflow-x'>
                    <input
                      className='w-full rounded-sm'
                      type='text'
                      placeholder='Search for a project or city...'
                      value={searchTerm}
                      onChange={handleSearchChange}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          setSearchTerm('')
                        }
                      }}
                    />

                    <header className='grid grid-cols-5 w-full gap-2 border mt-4 p-2 rounded-sm border-b-2'>
                      <p className='text-left w-full'>Project Name</p>
                      <p className='text-left w-full'>Address</p>
                      <p className='text-left w-full'>City</p>
                      <p className='text-left w-full'>Applicant</p>
                      <p className='text-left w-full'>Project Status</p>
                    </header>

                    <Pagination items={permitsToDisplay} itemsPerPage={25}>
                      {(currentPageItems) => (
                        <ul>
                          {currentPageItems.map((item) => (
                            <li
                              key={item.id}
                              className='grid grid-cols-5 w-full gap-2 border p-2 hover:bg-gray-50'
                            >
                              <Link
                                className='text-sm text-blue-600 hover:text-blue-500 underline flex flex-col gap-2'
                                href={`/land-directory/list-view/${item.id}`}
                              >
                                <p> {item.caseNumbers}</p>
                                <p>
                                  {item.listingNames &&
                                    item.listingNames?.slice(0, 25)}
                                  ...
                                </p>
                              </Link>

                              <p className='text-sm'>{item.projectLocations}</p>
                              <p className='text-sm'>{item.city}, CA</p>
                              <p className='text-sm'>
                                {capitalizeWords(item.applicant)}
                              </p>
                              <p className='text-sm'>{item.projectStatus}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Pagination>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  const { data, error } = await supabase.from('cityProjects').select()

  if (error) {
    console.error('Error fetching city projects:', error.message)
    return {
      props: {
        cityProjects: [],
      },
    }
  }

  return {
    props: {
      cityProjects: data || [],
    },
  }
}

const headerText = {
  title: 'Major planning projects',
  subtitle1: 'Current projects',
  subtitle1Description:
    'Below are some of the development projects in Orange County, California. The project links will take you to more detailed project descriptions, images, environmental documents, and supplementary information. If you would like additional information, feel free to contact our support team, or you may also contact the assigned case planner of the respective project.',
  subtitle2: 'Major Projects map and monthly development reports',
}
