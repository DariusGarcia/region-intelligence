import { createClient } from '@supabase/supabase-js'
import Head from 'next/head'
import Link from 'next/link'
import DataTable from '@/components/dataTables/dataTable'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoIosListBox } from 'react-icons/io'
import DefaultLayout from '@/components/layouts/defaultLayout'

export default function LandDirectoryListViewPage({ cityProjects }) {
  return (
    <>
      <Head>
        <title>Region Intelligence - Home</title>
        <meta name='description' content={headerText.subtitle1Description} />
      </Head>
      <div className='flex justify-center mt-8 md:mt-12 px-4'>
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
                  <FaMapMarkerAlt className='w-full text-center text-6xl text-blue-600 mb-2' />
                  <Link
                    href='/current-planning-developments/map-view'
                    className='text-blue-600 hover:text-blue-500 text-xl'>
                    Interactive map
                  </Link>
                  <p className=''>
                    Check out our interactive map for a list of major planning
                    projects in different cities.
                  </p>
                </article>
                <article className='flex flex-col gap-2 justify-center p-4 border  rounded-md'>
                  <IoIosListBox className='w-full text-center text-6xl text-blue-600 mb-2' />
                  <Link
                    href='/current-planning-developments'
                    className='text-blue-600 hover:text-blue-500 text-xl'>
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
          {/**
           *
           * Data table of city projects
           *
           */}
          <div className=''>
            <section className='mt-12'>
              <div className='flex flex-col gap-4'>
                <h4 className='text-2xl font-medium'>All planning projects</h4>
                <p>
                  Click on any of the projects below to see more information.
                </p>
                <DataTable permits={cityProjects} />
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

LandDirectoryListViewPage.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      <>{page}</>
    </DefaultLayout>
  )
}
