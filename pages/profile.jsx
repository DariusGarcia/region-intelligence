import { useEffect } from 'react'
import { Fragment } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Router from 'next/router'
import Head from 'next/head'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Profile from '@/components/profile'

export default function ProfilePage() {
  const session = useSession()
  const supabase = useSupabaseClient()

  useEffect(() => {
    // session is null on first render, so we need to wait a bit
    const timeout = setTimeout(() => {
      if (!session) {
        Router.push('/login')
      }
    }, 100) // Delay of 0.1 seconds (100 milliseconds)
    return () => clearTimeout(timeout) // Cleanup the timeout on component unmount
  }, [session])

  // TODO: add logout button
  async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error logging out:', error.message)
  }

  return (
    <>
      <div className='min-h-full bg-gray-100'>
        <div className=''>
          <div className='bg-indigo-600 pb-32'>
            <header className='py-10'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <section className='flex flex-row justify-between'>
                  <h1 className='text-3xl font-bold tracking-tight text-white'>
                    My Profile
                  </h1>
                  <div>
                    <button
                      className='text-white border border-white p-2 rounded-md hover:opacity-80 transition ease-out'
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </div>
                </section>
              </div>
            </header>
          </div>

          <main className='-mt-32 '>
            <div className='mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 rounded-md'>
              {/* Your content */}
              {session && (
                <>
                  <Head>
                    <title>First Property - Profile</title>
                  </Head>
                  <div className='flex w-full mt-12 justify-center bg-white rounded-md py-4 md:py-12'>
                    <Profile />
                  </div>{' '}
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
