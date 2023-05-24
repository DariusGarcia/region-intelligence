import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'

import Router from 'next/router'
import Questionnaire from '@/components/questionnaire'
import Questions from '@/components/questions'

export default function SignupPage() {
  const session = useSession()
  const supabase = useSupabaseClient()

  const [industry, setIndustry] = useState('')
  const [city, setCity] = useState('')
  const [aboutUs, setAboutUs] = useState('')
  const [communicationMethod, setCommunicationMethod] = useState('')

  useEffect(() => {
    if (session) {
      Router.push('/users')
    }
  }, [session])

  const handleIndustryChange = (value) => {
    setIndustry(value)
  }

  const handleCityChange = (value) => {
    setCity(value)
  }

  const handleAboutUsChange = (value) => {
    setAboutUs(value)
  }

  const handleCommunicationMethodChange = (value) => {
    setCommunicationMethod(value)
  }

  console.log({
    industry: industry,
    city: city,
    aboutUs: aboutUs,
    communicationMethod: communicationMethod,
  })
  return (
    <>
      <Head>
        <title>First Property - Signup</title>
      </Head>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-lg'>
          <h1 className='text-2xl font-bold text-center'>First Property</h1>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Create your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-lg'>
          <form className='space-y-6' action='#' method='POST'>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  First name
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    required='true'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Last name
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    required='true'
                    autoComplete='family-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='phoneNumber'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Phone number
              </label>
              <div className='mt-2'>
                <input
                  id='phoneNumber'
                  name='phoneNumber'
                  type='text'
                  required='true'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <Questions
              onIndustryChange={handleIndustryChange}
              onCityChange={handleCityChange}
              onAboutUsChange={handleAboutUsChange}
              onCommunicationMethodChange={handleCommunicationMethodChange}
            />
            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              >
                Sign up
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Already have an account?{' '}
            <a
              href='#'
              className='font-semibold leading-6 text-blue-600 hover:text-blue-500'
            >
              Login instead
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
