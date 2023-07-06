import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'
import CitySelectMenu from '@/components/selectMenus/citySelectMenu'
import { BounceLoader } from 'react-spinners'
import DataTable from '@/components/dataTables/dataTable'
import ErrorPage from '../error'
import StatusSelectMenu from '@/components/selectMenus/statusSelectMenu'
import FeedbackPopup from '@/features/feedbackPopup'
import FeedBackBanner from '@/components/alerts/FeedBackbanner'
import SuccessNotification from '@/components/notifications/successNotification'

const appId = process.env.NEXT_PUBLIC_ARCGIS_APP_ID

export default function MapsPage() {
  const session = useSession()
  const supabase = useSupabaseClient()
  const user = useUser()

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!session) {
        Router.push('/login')
      }
    }, 100)
    return () => clearTimeout(timeout)
  }, [session])

  const [permitData, setPermitData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState('')
  const [cities, setCities] = useState(['All'])
  const [projectStatuses, setProjectStatuses] = useState(['All'])
  const [selectedCity, setSelectedCity] = useState('All cities')
  const [selectedProjectStatus, setSelectedProjectStatus] = useState('All')
  const [feedbackRating, setFeedbackRating] = useState(null)
  const [feedbackComment, setFeedbackComment] = useState(null)
  const [feedbackRefer, setFeedbackRefer] = useState(null)
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)
  const [toggleFeedbackPopup, setToggleFeedbackPopup] = useState(false)
  const [feedbackPopupOpen, setFeedbackPopupOpen] = useState(false)

  useEffect(() => {
    async function checkIfFeedbackAlreadySubmitted() {
      setLoading(true)
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('feedback_submitted')
          .eq('id', user.id)
          .single()

        if (error) {
          setError(error.message)
          console.warn(error)
        } else if (data.feedback_submitted !== 'true') {
          setFeedbackSubmitted(false)
          setToggleFeedbackPopup(true)
        } else if (data.feedback_submitted === 'true') {
          setFeedbackSubmitted(true)
        }

        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    // Only run query once user is logged in.
    if (user) checkIfFeedbackAlreadySubmitted()
  }, [])

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

  if (error) return <ErrorPage errorMessage={error.message} />

  const handleFeedbackRatingChange = (value) => {
    setFeedbackRating(value)
  }
  const handleFeedbackCommentChange = (value) => {
    setFeedbackComment(value)
  }
  const handleFeedbackReferChange = (value) => {
    setFeedbackRefer(value)
  }
  const handleBannerFeedbackToggle = (value) => {
    setFeedbackPopupOpen(value)
  }
  const handleFeedbackSubmit = () => {
    // Implement the logic to submit the user feedback data
    updateUserFeedback()
    setToggleFeedbackPopup(false)
    setFeedbackPopupOpen(false)
  }

  const handleFeedbackClose = (value) => {
    setFeedbackPopupOpen(value)
  }

  async function updateUserFeedback() {
    if (!user) return
    setLoading(true)
    const updates = {
      id: user.id,
      feedback_rating: String(feedbackRating),
      feedback_comment: feedbackComment,
      feedback_refer: feedbackRefer,
      feedback_submitted: true,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) {
      alert(error.message)
    } else {
      setSuccess('Feedback submitted!')
      setToggleFeedbackPopup(false)
    }
    setLoading(false)
  }

  const renderMap = () => {
    return (
      <>
        {permitData[0].lat !== 0 && !isLoading && (
          <>
            <Head>
              <title>First Property - Maps</title>
            </Head>
            <div className='max-w-[100vw] flex flex-col justify-center px-2 md:px-8'>
              {!loading &&
                toggleFeedbackPopup &&
                feedbackSubmitted !== true && (
                  <div className='max-w-[100vw] w-full'>
                    <FeedBackBanner
                      bannerToggleFeedbackPopup={handleBannerFeedbackToggle}
                    />
                  </div>
                )}
              {!loading &&
                feedbackPopupOpen === true &&
                feedbackSubmitted !== true && (
                  <FeedbackPopup
                    onFeedbackRatingChange={handleFeedbackRatingChange}
                    onFeedbackCommentChange={handleFeedbackCommentChange}
                    onFeedbackReferChange={handleFeedbackReferChange}
                    onFeedbackSubmit={handleFeedbackSubmit}
                    onFeedbackClose={handleFeedbackClose}
                  />
                )}
              {success && <SuccessNotification message={success} />}
              <h1 className='flex justify-center font-bold text-3xl md:mb-8 mt-2 md:mt-12'>
                City Planning Guide
              </h1>
              {/**
               *    Select menus
               *
               * */}
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
                {appId ? (
                  <iframe
                    src={`https://ucirvine.maps.arcgis.com/apps/instant/sidebar/index.html?appid=${appId}`}
                    frameBorder='0'
                    className='w-full h-[90vh] rounded-md'
                    allowFullScreen>
                    iFrames are not supported on this page.
                  </iframe>
                ) : (
                  <h2 className='p-2 font-bold text-center bg-red-500 text-white '>
                    Error: Missing ARC GIS API Key
                  </h2>
                )}
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
