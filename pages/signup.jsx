import React, { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import SignUpQuestions from '@/features/auth/signUpQuestions'
import ErrorWarning from '@/components/alerts/error'
import PrivacyPolicyAlert from '@/components/alerts/privacyPolicyAlert'
import SuccessNotification from '@/components/notifications/successNotification'

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
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 mt-4 md:py-12 lg:px-8 '>
        {/* <PrivacyPolicyAlert onPrivacyPolicyAccept={handlePrivacyPolicyAccept} /> */}
        {success && (
          <SuccessNotification message='Account created successfully' />
        )}
        <div className='sm:mx-auto sm:w-full sm:max-w-lg'>
          <h1 className='text-2xl font-bold text-center'>
            Region Intelligence
          </h1>
          <h2 className='mt-4 md:mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600'>
            Create your account
          </h2>
        </div>

        <div className=' sm:mx-auto sm:w-full sm:max-w-3xl md:px-6 '>
          <form className='space-y-6' action='#' method='POST'>
            {error && <ErrorWarning message={error.message} />}
            {/* FIRST and LAST NAME */}
            {/* <div className='flex flex-col mt-10  gap-x-6 gap-y-8 '>
              <div className='flex flex-col md:flex-row justify-between gap-4'>
                <div className='w-full mb-2 md:mb-0'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    First name
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      required={true}
                      autoComplete='given-name'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>

                <div className='w-full'>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    Last name
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      required={true}
                      autoComplete='family-name'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='flex w-full flex-col'>
                <label
                  htmlFor='phoneNumber'
                  className='block w-full text-sm font-medium leading-6 text-gray-900'>
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
            </div> */}
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
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {/* Password field */}
            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
              </div>
              <div className='flex flex-row justify-start mt-2 relative rounded-md shadow-sm'>
                <input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  autoComplete='new-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <span className='  pl-3 flex items-center'>
                  <button
                    type='button'
                    className='text-gray-500 sm:text-sm sm:leading-5'
                    onClick={togglePasswordVisibility}>
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </span> */}
              </div>
            </div>
            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor='confirm-password'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Confirm Password
              </label>
              <div className='mt-2 relative rounded-md shadow-sm'>
                <input
                  id='confirm-password'
                  name='confirm-password'
                  type='password'
                  autoComplete='new-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            {/* <SignUpQuestions
              onIndustryRoleChange={handleIndustryRoleChange}
              onYearsOfExperienceChange={handleYearsOfExperienceChange}
              onPrimaryPurposeChange={handlePrimaryPurposeChange}
              onCityChange={handleCityChange}
              onFoundUsChange={handleFoundUsChange}
              onCommunicationMethodChange={handleCommunicationMethodChange}
              onChallengesOvercomeChange={handleChallengesOvercomeChange}
              onOtherToolsChange={handleOtherToolsChange}
              onIdealToolChange={handleIdealToolChange}
            /> */}
            <div>
              {/* Error messages */}
              <div>
                {/* Error messages */}
                {error && <ErrorWarning message={error.message} />}
                {email === '' || password === '' ? (
                  <p className='mb-2 text-sm text-red-600 font-medium'>
                    Please fill out all required fields.
                  </p>
                ) : null}
                <button
                  type='submit'
                  onClick={handleSignUp}
                  disabled={email === '' || password === '' || loading}
                  className={
                    email === '' || password === '' || loading
                      ? 'flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                      : 'flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                  }>
                  Sign up
                </button>
              </div>
              {/* {error && <ErrorWarning message={error.message} />}
              {firstName === '' ||
              lastName === '' ||
              phoneNumber === '' ||
              email === '' ||
              password === '' ||
              industryRole === '' ||
              yearsExperience === '' ||
              primaryPurpose === '' ? (
                <p className='mb-2 text-sm text-red-600 font-medium'>
                  Please fill out all required fields.
                </p>
              ) : null}
              <button
                type='submit'
                onClick={handleSignUp}
                disabled={
                  firstName === '' ||
                  lastName === '' ||
                  phoneNumber === '' ||
                  email === '' ||
                  password === '' ||
                  industryRole === '' ||
                  yearsExperience === '' ||
                  primaryPurpose === '' ||
                  loading
                }
                className={
                  firstName === '' ||
                  lastName === '' ||
                  phoneNumber === '' ||
                  email === '' ||
                  password === '' ||
                  industryRole === '' ||
                  yearsExperience === '' ||
                  primaryPurpose === '' ||
                  loading
                    ? 'flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                    : 'flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                }>
                Sign up
              </button> */}
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Already have an account?{' '}
            <Link
              href='/login'
              className='font-semibold leading-6 text-blue-600 hover:text-blue-500'>
              Login instead
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
