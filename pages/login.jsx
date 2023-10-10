import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Router from 'next/router'
import Link from 'next/link'
import PasswordResetErrorWarning from '@/components/alerts/resetPasswordError'
import PasswordResetSuccessAlert from '@/components/alerts/passwordResetSuccess'

export default function LoginPage() {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    if (session) {
      Router.push('/current-planning-developments/map-view')
    }
  }, [session])

  async function handleSignIn(e) {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    return { data, error }
  }

  async function handleResetPassword(e) {
    if (email.length <= 0) {
      setError(true)
      setErrorMessage('Please enter your email to reset your password.')
      return
    } else {
      e.preventDefault()
      setError(false)
      setSuccess(true)
      setSuccessMessage('Password reset email sent.')
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:3000/forgot-password',
      })
    }
  }

  return (
    <>
      <Head>
        <title>Region Intelligence - Login</title>
      </Head>

      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h1 className='font-bold text-center text-xl'>Region Intelligence</h1>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
          {error && <PasswordResetErrorWarning message={errorMessage} />}
          {success && <PasswordResetSuccessAlert message={successMessage} />}
        </div>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6'>
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
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
                <div className='text-sm'>
                  <button
                    onClick={handleResetPassword}
                    className='font-semibold text-blue-600 hover:text-blue-500'>
                    Forgot password?
                  </button>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                onClick={handleSignIn}
                className='flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                Sign in
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Not a member?{' '}
            <Link
              href='/signup'
              className='font-semibold leading-6 text-blue-600 hover:text-blue-500'>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
