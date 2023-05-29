import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import { BounceLoader } from 'react-spinners'

import LeftAlignedCard from '@/components/cards/leftAlignedCard'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

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

  const pages = [
    { name: 'Land Directory', href: '/land-directory', current: false },
    { name: 'List View', href: '/land-directory', current: false },
  ]

  return (
    <>
      {' '}
      {cityProject && (
        <div className='flex  justify-center pt-12 px-4 bg-stone-50 pb-8'>
          <div className='max-w-7xl'>
            <nav className='flex mb-8 mx-4 md:mx-0' aria-label='Breadcrumb'>
              <ol role='list' className='flex items-center space-x-4'>
                <li>
                  <div>
                    <a href='/' className='text-gray-400 hover:text-gray-500'>
                      <HomeIcon
                        className='h-5 w-5 flex-shrink-0'
                        aria-hidden='true'
                      />
                      <span className='sr-only'>Home</span>
                    </a>
                  </div>
                </li>
                {pages.map((page) => (
                  <li key={page.name}>
                    <div className='flex items-center'>
                      <ChevronRightIcon
                        className='h-5 w-5 flex-shrink-0 text-gray-400'
                        aria-hidden='true'
                      />
                      <a
                        href={page.href}
                        className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                        aria-current={page.current ? 'page' : undefined}
                      >
                        {page.name}
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
            {loading ? (
              <div className='flex justify-center my-24'>
                <BounceLoader color='#0d6efd' />
              </div>
            ) : (
              <>
                {cityProject && <LeftAlignedCard data={cityProject} />}
                <div className='my-12  flex justify-center'>
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
      )}{' '}
    </>
  )
}
