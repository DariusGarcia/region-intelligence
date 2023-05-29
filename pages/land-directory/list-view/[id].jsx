import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import image from '../../../public/home.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import { BounceLoader } from 'react-spinners'
import capitalizeWords from '@/utils/capitalizeWords'
import LeftAlignedCard from '@/components/cards/leftAlignedCard'

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

  return (
    <div className='flex justify-center pt-12 px-4 bg-stone-50 pb-8'>
      <div className='max-w-7xl'>
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
  )
}
