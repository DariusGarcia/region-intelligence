import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import image from '../../public/home.jpg'
import Image from 'next/image'
import addHyphens from '@/utils/urlFormat'
import { createClient } from '@supabase/supabase-js'
import BounceLoader from 'react-spinners/BounceLoader'
import capitalizeWords from '@/utils/capitalizeWords'
import Pagination from '@/components/pagination'

export default function index() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPermits, setFilteredPermits] = useState([])
  const [cityProjects, setCityProjects] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    const fetchPermits = async () => {
      const { data, error } = await supabase.from('cityProjects').select()
      if (error) setError(error)
      setCityProjects(data)
      setLoading(false)
    }
    fetchPermits()
  }, [])

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
        item.plannerName.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setFilteredPermits(filteredPermits)
    setCurrentPage(1)
  }

  const permitsToDisplay = searchTerm ? filteredPermits : cityProjects

  if (error) return <div>{error}</div>

  return (
    <div className='flex justify-center mt-4 md:mt-12 px-4'>
      <div className='flex flex-col items-center'>
        <div className='md:max-w-7xl justify-center'>
          <h1 className='text-3xl md:text-5xl font-bold  '>
            Major planning projects
          </h1>
          <section className='mt-8 md:mt-12 flex flex-col justify-center w-full gap-4'>
            <h2 className='text-2xl font-medium'>Current projects</h2>
            <p className='max-w-xl'>
              Below are some of the development projects in Orange County,
              California. The project links will take you to more detailed
              project descriptions, images, environmental documents, and
              supplementary information. If you would like additional
              information, feel free to contact our support team, or you may
              also contact the assigned case planner of the respective project.
            </p>
          </section>
          <section className='mt-12'>
            <h3 className='text-2xl font-medium'>
              Major Projects map and monthly development reports
            </h3>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 justify-between max-w-xl mt-4'>
              <article className='flex flex-col gap-2  justify-center p-4 border   rounded-md'>
                <Image
                  src={image}
                  width={200}
                  alt='image'
                  height={200}
                  className='flex justify-center place-items-center w-full'
                />
                <Link
                  href='/maps'
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
                  width={200}
                  alt='image'
                  height={200}
                  className='flex justify-center place-items-center w-full'
                />
                <Link
                  href='/land-directory'
                  className='text-blue-600 hover:text-blue-500 text-xl'
                >
                  Monthly development project reports
                </Link>
                <p className=''>
                  You can find a full list of pending development projects here.
                </p>
              </article>
            </div>
          </section>
        </div>
        <div className=''>
          <section className='mt-12'>
            <div className='flex flex-col gap-4'>
              <h4 className='text-2xl font-medium'>All planning projects</h4>
              <p>Click on any of the projects below to see more information.</p>
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
                    disabled={loading}
                  />
                  <header className='grid grid-cols-5 w-full gap-2 border mt-4 p-2 rounded-sm border-b-2'>
                    <p className='text-left w-full'>Project Name</p>
                    <p className='text-left w-full'>Address</p>
                    <p className='text-left w-full'>City</p>
                    <p className='text-left w-full'>Applicant</p>
                    <p className='text-left w-full'>Project Status</p>
                  </header>
                  {loading ? (
                    <div className='flex justify-center my-24 '>
                      <BounceLoader color='#36d7b7' />
                    </div>
                  ) : (
                    <Pagination items={permitsToDisplay} itemsPerPage={25}>
                      {(currentPageItems) => (
                        <ul>
                          {currentPageItems.map((item) => (
                            <li
                              key={item.id}
                              className='grid grid-cols-5 w-full gap-2 border p-2 hover:bg-gray-50'
                            >
                              <Link
                                className='text-sm text-blue-600 hover:text-blue-500 underline'
                                href={`/land-directory/list-view/${item.id}`}
                              >
                                {item.caseNumbers}
                              </Link>
                              <p className='text-sm'>{item.projectLocations}</p>
                              <p className='text-sm'>{item.city}</p>
                              <p className='text-sm'>
                                {capitalizeWords(item.applicant)}
                              </p>
                              <p className='text-sm'>{item.projectStatus}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Pagination>
                  )}
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
