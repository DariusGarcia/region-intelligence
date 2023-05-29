import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import image from '../../../public/home.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import { BounceLoader } from 'react-spinners'
import capitalizeWords from '@/utils/capitalizeWords'

export default function ListViewPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  const router = useRouter()
  const { id } = router.query
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [cityProject, setCityProject] = useState([])

  useEffect(() => {
    setLoading(true)
    const fetchPermits = async () => {
      const { data, error } = await supabase
        .from('cityProjects')
        .select()
        .eq('id', id)
      if (error) setError(error)
      setCityProject(data)
      setLoading(false)
    }
    fetchPermits()
  }, [id])

  console.log({ cityProjects: cityProject })

  function replaceHyphensWithSpaces(str) {
    return str.replace(/-/g, ' ')
  }
  return (
    <div className='flex justify-center mt-12 px-4'>
      <div className='max-w-7xl'>
        {loading ? (
          <div className='flex justify-center my-24'>
            <BounceLoader color='#0d6efd' />
          </div>
        ) : (
          <>
            {cityProject &&
              cityProject.map((item) => (
                <section
                  className='flex flex-col justify-center w-full gap-4'
                  key={item.caseNumbers}
                >
                  <h1 className='text-3xl font-medium mb-4'>
                    {item.caseNumbers}
                  </h1>
                  {item.imageUrls === 'None' ? (
                    <Image
                      src={image}
                      width={500}
                      height={500}
                      alt='image'
                      className='rounded-md shadow-lg'
                    />
                  ) : (
                    <img
                      alt='project'
                      className='h-full w-full shadow-md rounded-md'
                      src={item.imageUrls}
                    />
                  )}
                  <p className='italic'>Last update: {item.recentUpdate}</p>
                  <p className='text-xl font-medium'>
                    Project address: {item.projectLocations}
                  </p>
                  <p className='text-lg'>
                    <span className='font-medium'> Applicant: </span>
                    {capitalizeWords(item.applicant)}
                  </p>
                  <p className='text-lg'>
                    <span className='font-medium'> Applicant's email: </span>
                    {item.applicantEmail}
                  </p>
                  <p className='text-lg'>
                    <span className='font-medium'> Project manager: </span>
                    {item.plannerName === null || item.plannerName === ''
                      ? 'Undisclosed'
                      : item.plannerName}
                  </p>
                  <p className='text-lg'>
                    <span className='font-medium'> Planner's Phone: </span>
                    {item.plannerPhone}
                  </p>
                  <p className='text-lg'>
                    <span className='font-medium'> Planner's Email: </span>
                    {item.plannerEmail}
                  </p>
                  <p className='text-lg'>
                    <span className='font-medium'> Listing name: </span>
                    {item.listingNames}
                  </p>
                  <p className='text-lg'>
                    <span className='font-medium'> Type of use: </span>
                    {item.typeOfUse}
                  </p>
                  <p className='text-lg'>
                    <span className='font-medium'> City: </span>
                    {item.city}
                  </p>

                  <ul className='text-lg'>
                    <span className='font-medium'> Project Description: </span>
                    <li className='list-disc ml-8 max-w-lg text-left'>
                      {item.projectDescriptions}
                    </li>
                  </ul>
                  <p className='text-lg'>
                    <span className='font-medium'> Project Status: </span>
                    {item.projectStatus}
                  </p>
                </section>
              ))}
            <div className='mt-24 flex justify-center'>
              <Link
                href='/land-directory'
                className='bg-blue-600 hover:bg-blue-500 transition ease-out text-white p-2 rounded-md'
              >
                Back to major planning projects
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
