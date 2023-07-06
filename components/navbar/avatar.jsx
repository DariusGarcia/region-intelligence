import { useState } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import Link from 'next/link'

export default function Avatar({ name }) {
  const supabase = useSupabaseClient()
  const user = useUser()

  const [toggle, setToggle] = useState(false)
  async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error logging out:', error.message)
  }

  return (
    <>
      {name && (
        <div className='relative inline-block cursor-pointer shadow-xl rounded-full'>
          <p
            onClick={() => setToggle(!toggle)}
            className={
              !toggle
                ? 'h-12 w-12 rounded-full bg-white hover:bg-gray-200 transition ease-out flex justify-center items-center font-medium z-50 hover:scale-105'
                : 'h-12 w-12 rounded-full bg-gray-200 hover:bg-gray-200 transition ease-out flex justify-center items-center font-medium z-50 hover:scale-105'
            }>
            {String(name).toUpperCase()}
          </p>
          <span className='absolute right-0 top-0 block h-3.5 w-3.5 rounded-full bg-red-400 ring-2 ring-white'></span>
          {toggle && (
            <div className='absolute flex flex-col p-2 py-4 w-max max-w-2xl h-max items-start gap-2 mt-2 text-md shadow-lg bg-white ring-1 ring-gray-900/5 cursor-default z-50 rounded-md'>
              <Link
                href='/pricing'
                className='bg-red-100 border p-2 ml-2 border-red-500 hover:bg-red-200 transition ease-out text-sm px-2 rounded-md'>
                Free tier
              </Link>
              <p className='text-gray-900 p-2 z-50 font-bold text-lg'>
                {user.user_metadata.first_name} {user.user_metadata.last_name}
              </p>
              <p className='z-50 italic p-2 font-medium text-sm text-gray-400'>
                {user.email}
              </p>
              <Link
                href='/profile'
                className='text-gray-900 p-2 rounded-md z-50 transition ease-out font-medium hover:bg-gray-100 w-full'>
                My profile
              </Link>
              <button
                className='text-start p-2 text-gray-900 rounded-md z-50 transition ease-out font-medium hover:bg-gray-100 w-full'
                onClick={logout}>
                Logout <span aria-hidden='true'>&rarr;</span>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
