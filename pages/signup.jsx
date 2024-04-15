import React, { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import SignUpQuestions from '@/features/auth/signUpQuestions'
import ErrorWarning from '@/components/alerts/error'
import PrivacyPolicyAlert from '@/components/alerts/privacyPolicyAlert'
import SuccessNotification from '@/components/notifications/successNotification'
import { Button } from 'antd'
import Image from 'next/image'

export default function SignupPage() {
  const session = useSession()
  const supabase = useSupabaseClient()
  // TODO: condense this into one state object
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [industryRole, setIndustryRole] = useState('')
  const [yearsExperience, setYearsExperience] = useState('')
  const [primaryPurpose, setPrimaryPurpose] = useState('')
  const [challengesOvercome, setChallengesOvercome] = useState('')
  const [otherTools, setOtherTools] = useState('')
  const [idealTool, setIdealTool] = useState('')
  const [city, setCity] = useState('')
  const [foundUs, setFoundUs] = useState('')
  const [communicationMethod, setCommunicationMethod] = useState('')
  const [privacyPolicy, setPrivacyPolicy] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [showPrivacyPolicyAlert, setShowPrivacyPolicyAlert] = useState(false)

  useEffect(() => {
    if (session) {
      Router.push('/dashboard')
    }
  }, [session])

  function togglePasswordVisibility() {
    setShowPassword(!showPassword)
  }

  function handleCityChange(value) {
    setCity(value)
  }
  function handleFoundUsChange(value) {
    setFoundUs(value)
  }
  function handleCommunicationMethodChange(value) {
    setCommunicationMethod(value)
  }
  function handleIndustryRoleChange(value) {
    setIndustryRole(value)
  }
  function handleYearsOfExperienceChange(value) {
    setYearsExperience(value)
  }
  function handlePrimaryPurposeChange(value) {
    setPrimaryPurpose(value)
  }
  function handleChallengesOvercomeChange(value) {
    setChallengesOvercome(value)
  }
  function handleOtherToolsChange(value) {
    setOtherTools(value)
  }
  function handleIdealToolChange(value) {
    setIdealTool(value)
  }
  function handlePrivacyPolicyAccept(value) {
    setPrivacyPolicy(value)
  }

  async function handleSignUp(e) {
    e.preventDefault()
    // setShowPrivacyPolicyAlert(true)

    // if (!privacyPolicy) {
    //   return
    // }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          // first_name: firstName,
          // last_name: lastName,
          // phone_number: phoneNumber,
          // industry_role: industryRole,
          // years_experience: yearsExperience,
          // primary_purpose: primaryPurpose,
          // challenges_overcome: challengesOvercome,
          // other_tools: otherTools,
          // ideal_tool: idealTool,
          // city: city,
          // found_us: foundUs,
          // communication_method: communicationMethod,
          // privacy_policy: privacyPolicy,
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
        <title>Region Intelligence - Signup</title>
      </Head>
      <div className='flex min-h-full w-full justify-center'>
        {/* <PrivacyPolicyAlert onPrivacyPolicyAccept={handlePrivacyPolicyAccept} /> */}
        <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className=' mx-auto w-full max-w-4xl lg:w-[48rem] '>
            <div className='flex justify-center flex-col items-center '>
              <Image
                className=''
                src='/GrayscaleLogo.svg'
                alt='Region Intelligence'
                width={400}
                height={200}
              />
              <h2 className='text-2xl md:text-3xl font-bold leading-9 tracking-tight text-gray-900'>
                Create an Account
              </h2>
              <p className='mt-2 text-sm leading-6 text-gray-500'>
                Have an Account?{' '}
                <Link
                  href='/login'
                  className='font-semibold text-blue-600 hover:text-blue-500'>
                  Sign In
                </Link>
              </p>
            </div>

            <div className='mt-10 '>
              <div className=''>
                {success && (
                  <SuccessNotification message='Account created successfully' />
                )}
                <form action='#' method='POST' className='space-y-6'>
                  {error && <ErrorWarning message={error.message} />}
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium leading-6 text-gray-900'>
                      Email address
                    </label>
                    <div className='mt-2'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required={true}
                        placeholder='Enter email address'
                        onChange={(e) => setEmail(e.target.value)}
                        className='block w-full rounded-sm border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium leading-6 text-gray-900'>
                      Password
                    </label>
                    <div className='mt-2'>
                      <input
                        id='password'
                        name='password'
                        autoComplete='current-password'
                        required={true}
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Create password'
                        className='block w-full rounded-sm border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='confirm-password'
                      className='block text-sm font-medium leading-6 text-gray-900'>
                      Confirm Password
                    </label>
                    <div className='mt-2'>
                      <input
                        id='confirm-password'
                        name='confirm-password'
                        type='password'
                        autoComplete='new-password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder=''
                        className='block w-full rounded-sm border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div>
                    {/* Error messages */}
                    {error && <ErrorWarning message={error.message} />}
                    {email === '' || password === '' ? (
                      <p className='mb-2 text-sm text-red-600 font-medium'>
                        Please fill out all required fields.
                      </p>
                    ) : null}
                    <Button
                      type='submit'
                      onClick={handleSignUp}
                      disabled={email === '' || password === '' || loading}
                      className={
                        email === '' || password === '' || loading
                          ? 'flex w-full items-center h-12 justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                          : 'flex w-full items-center h-12 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                      }>
                      Create Account
                    </Button>
                  </div>
                </form>
              </div>

              {/* GOOGLE LOGIN  */}
              {/* <div className='flex justify-center flex-col items-center mt-10'>
                <div className='relative '>
                  <div
                    className='absolute inset-0 flex items-center'
                    aria-hidden='true'>
                    <div className='w-full border-t border-gray-200' />
                  </div>
                  <div className='relative flex justify-center text-sm font-medium leading-6'>
                    <span className='bg-white px-6 text-gray-900'>
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className='mt-6 w-full grid grid-cols-1 max-w-sm gap-4'>
                  <a
                    href='#'
                    className='flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent'>
                    <svg
                      className='h-5 w-5'
                      aria-hidden='true'
                      viewBox='0 0 24 24'>
                      <path
                        d='M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z'
                        fill='#EA4335'
                      />
                      <path
                        d='M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z'
                        fill='#4285F4'
                      />
                      <path
                        d='M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z'
                        fill='#FBBC05'
                      />
                      <path
                        d='M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z'
                        fill='#34A853'
                      />
                    </svg>
                    <span className='text-sm font-semibold leading-6'>
                      Google
                    </span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
