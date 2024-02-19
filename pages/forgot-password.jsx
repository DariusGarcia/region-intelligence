import React, { useState } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Router from 'next/router'

export default function UpdatePassword() {
  const supabase = useSupabaseClient()
  const session = useSession()
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  async function handlePasswordReset(e) {
    e.preventDefault()
    if (password !== password2) {
      alert('Passwords do not match')
      return
    }

    const { data, error } = await supabase.auth.updateUser({
      password: password,
    })

    if (session) {
      Router.push('/dashboard')
    }
    return { data, error }
  }

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-auto'
            src='/logo.png'
            alt='Your Company'
          />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Reset password
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'>
                New Password
              </label>
              <div className='mt-2'>
                <input
                  type='password'
                  name='password'
                  onChange={(e) => setPassword(e.target.value)}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex flex-col'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Confirm password
                </label>
                <div className='mt-2'>
                  <input
                    type='password'
                    name='password'
                    onChange={(e) => setPassword2(e.target.value)}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                onClick={handlePasswordReset}>
                Update password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
