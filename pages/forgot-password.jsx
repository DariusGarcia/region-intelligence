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

    await supabase.auth.updateUser({ password: password })
    if (session) {
      Router.push('/')
    }
  }

  return (
    <div className='flex justify-center w-full md:my-48'>
      <div className=''></div>
      <div className='max-w-7xl bg-gray-50 bg-opacity-50 p-24 rounded-md flex flex-col gap-4'>
        <h1 className='font-medium mb-8'>Enter new password</h1>
        <form className='flex flex-col gap-4'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
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
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
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
          <button
            className='bg-blue-600 text-white rounded-lg mt-4 p-2'
            onClick={handlePasswordReset}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  )
}
