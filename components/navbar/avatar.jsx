import react, { useState } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import Link from 'next/link'

export default function Avatar({ name }) {
  const supabase = useSupabaseClient()
  const [toggle, setToggle] = useState(false)
  async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error logging out:', error.message)
  }

  return (
    <>
      {name && (
        <button
          onClick={() => setToggle(!toggle)}
          className='relative inline-block'>
          <p
            className={
              !toggle
                ? 'h-12 w-12 rounded-full bg-white hover:bg-gray-200 transition ease-out flex justify-center items-center font-medium z-50'
                : 'h-12 w-12 rounded-full bg-gray-200 hover:bg-gray-200 transition ease-out flex justify-center items-center font-medium z-50'
            }>
            {String(name).toUpperCase()}
          </p>
          <span className='absolute right-0 top-0 block h-3.5 w-3.5 rounded-full bg-red-400 ring-2 ring-white'></span>
          {toggle && (
            <div className='absolute flex flex-col justify-center items-start gap-2 mt-2 text-md bg-gray-50 p-2 py-4 rounded-md w-36 h-max cursor-default z-50'>
              <p className='bg-red-100 border border-red-500 p-1  rounded-md'>
                Free tier
              </p>
              <Link
                href='/profile'
                className='hover:text-gray-600 z-50 transition ease-out font-medium'>
                My profile
              </Link>
              <button
                className='font-semibold leading-6 text-gray-900 hover:text-blue-600'
                onClick={logout}>
                Logout <span aria-hidden='true'>&rarr;</span>
              </button>
            </div>
          )}
        </button>
      )}
    </>
  )
}
