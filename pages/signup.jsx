import React, { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Questions from '@/components/questions'
import ErrorWarning from '@/components/alerts/error'

export default function SignupPage() {
  const session = useSession()
  const supabase = useSupabaseClient()
  // condense this into one state object
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [industry, setIndustry] = useState('')
  const [city, setCity] = useState('')
  const [foundUs, setFoundUs] = useState('')
  const [communicationMethod, setCommunicationMethod] = useState('')
  const [background, setBackground] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (session) {
      Router.push('/')
    }
  }, [session])

  const handleIndustryChange = (value) => {
    setIndustry(value)
  }
  const handleCityChange = (value) => {
    setCity(value)
  }
  const handleFoundUsChange = (value) => {
    setFoundUs(value)
  }
  const handleCommunicationMethodChange = (value) => {
    setCommunicationMethod(value)
  }
  const handleBackgroundChange = (value) => {
    setBackground(value)
  }

  async function handleSignUp(e) {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber,
          industry: industry,
          city: city,
          found_us: foundUs,
          communication_method: communicationMethod,
          background: background,
        },
      },
    })

    if (error) {
      setError(error)
      return
    }
    setSuccess(true)
    setLoading(!loading)

    return { data, error }
  }

  return (
    <>
      <Head>
        <title>First Property - Signup</title>
      </Head>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 mt-4 md:py-12 lg:px-8 '>
        <div className='sm:mx-auto sm:w-full sm:max-w-lg'>
          <h1 className='text-2xl font-bold text-center'>First Property</h1>
          <h2 className='mt-4 md:mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600'>
            Create your account
          </h2>
        </div>

        <div className=' sm:mx-auto sm:w-full sm:max-w-xl '>
          <form className='space-y-6' action='#' method='POST'>
            {error && <ErrorWarning message={error.message} />}
            <div className='flex flex-col mt-10  gap-x-6 gap-y-8 '>
              <div className='flex flex-col md:flex-row justify-between gap-4'>
                <div className='w-full mb-2 md:mb-0'>
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
                      required={true}
                      autoComplete='given-name'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>

                <div className='w-full'>
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
                      required={true}
                      autoComplete='family-name'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='flex w-full flex-col'>
                <label
                  htmlFor='phoneNumber'
                  className='block w-full text-sm font-medium leading-6 text-gray-900'
                >
                  Phone number
                </label>
                <div className='mt-2'>
                  <input
                    id='phoneNumber'
                    name='phoneNumber'
                    type='text'
                    required={true}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                  required={true}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  onChange={(e) => setEmail(e.target.value)}
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
                  required={true}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <Questions
              onIndustryChange={handleIndustryChange}
              onCityChange={handleCityChange}
              onFoundUsChange={handleFoundUsChange}
              onCommunicationMethodChange={handleCommunicationMethodChange}
              onBackgroundChange={handleBackgroundChange}
            />
            <div>
              {error && <ErrorWarning message={error.message} />}
              <button
                type='submit'
                onClick={handleSignUp}
                disabled={loading ? true : false}
                className='flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              >
                Sign up
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Already have an account?{' '}
            <Link
              href='/login'
              className='font-semibold leading-6 text-blue-600 hover:text-blue-500'
            >
              Login instead
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
