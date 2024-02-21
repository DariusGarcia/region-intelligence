import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Router from 'next/router'
import Link from 'next/link'
import PasswordResetErrorWarning from '@/components/alerts/resetPasswordError'
import PasswordResetSuccessAlert from '@/components/alerts/passwordResetSuccess'
import { Button, Spin } from 'antd'

export default function LoginPage() {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    if (session) {
      Router.push('/dashboard')
    }
  }, [session])

  async function handleSignIn(e) {
    e.preventDefault()
    setLoading(true)
    if (email.length <= 0 || password.length <= 0) {
      alert('Please enter your email and password.')
      setLoading(false)
      return
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    return { data, error }
  }

  const forgotPasswordURL =
    process.env.NODE_ENV === 'development' || 'local'
      ? process.env.NEXT_PUBLIC_LOCAL_FORGOT_PASSWORD_URL
      : process.env.NEXT_PUBLIC_FORGOT_PASSWORD_URL

  async function handleResetPassword(e) {
    if (email.length <= 0) {
      setError(true)
      setErrorMessage('Please enter your email to reset your password.')
      return
    } else {
      e.preventDefault()
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: forgotPasswordURL,
      })
      setError(false)
      setSuccess(true)
      setSuccessMessage('Password reset email sent.')
    }
  }

  return (
    <>
      <Head>
        <title>Region Intelligence - Login</title>
      </Head>
      <div className='lg:grid lg:grid-cols-2 flex justify-center'>
        <div className='w-full hidden lg:block'>
          <Image
            alt='login'
            priority={true}
            width={700}
            height={800}
            src='/login/loginImage.png'
          />
        </div>
        <div className='flex min-h-full max-w-lg flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
          <div className='sm:mx-auto sm:w-full flex items-center flex-col'>
            <div className='w-10 mb-8'>
              <Image src='/logo.png' alt='logo' width={200} height={200} />
            </div>
            <h1 className='font-bold text-center text-3xl'>Sign In</h1>
            <p className='mt-2 text-center text-lg leading-9 tracking-tight text-gray-900'>
              New to our product?{' '}
              <Link
                href='/signup'
                className='text-blue-600 font-semibold transition ease-out hover:text-blue-500 hover:underline'>
                Create an account
              </Link>
            </p>
            {error && <PasswordResetErrorWarning message={errorMessage} />}
            {success && <PasswordResetSuccessAlert message={successMessage} />}
          </div>
          <div className='mt-10 sm:mx-auto sm:w-full'>
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
                    placeholder='Enter Email Address'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className='block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
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
                    placeholder='Enter Password'
                    autoComplete='current-password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className='block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                {loading ? (
                  <span className='flex items-center justify-center w-full'>
                    <Spin />
                  </span>
                ) : (
                  <Button
                    type='submit'
                    onClick={handleSignIn}
                    className='flex items-center w-full justify-center rounded-sm bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                    Sign in
                  </Button>
                )}
              </div>
            </form>

            {/* <p className='mt-10 text-center text-sm text-gray-500'>
              Not a member?{' '}
              <Link
                href='/signup'
                className='font-semibold leading-6 text-blue-600 hover:text-blue-500'>
                Create an account
              </Link>
            </p> */}
          </div>
        </div>
      </div>
    </>
  )
}
