import Link from 'next/link'
import { useState } from 'react'

export default function PrivacyPolicyAlert({ onPrivacyPolicyAccept }) {
  const [toggle, setToggle] = useState(true)

  return (
    <>
      {toggle && (
        <div className='pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 z-50  w-full '>
          <div className='pointer-events-auto ml-auto max-w-4xl flex flex-col md:h-[20vh] bg-blue-600 justify-center border border-blue-500 rounded-xl p-6 shadow-lg ring-1 ring-gray-900/10'>
            <p className='text-sm leading-6 text-white'>
              This website uses cookies to supplement a balanced diet and
              provide a much deserved reward to the senses after consuming bland
              but nutritious meals. Accepting our cookies is optional but
              recommended, as they are delicious. See our{' '}
              <Link href='/company/privacy' className='font-semibold underline'>
                cookie policy
              </Link>
              .
            </p>
            <div className='mt-4 flex items-center gap-x-5'>
              <button
                type='button'
                onClick={() => {
                  onPrivacyPolicyAccept(true)
                  setToggle(false)
                }}
                className='rounded-md bg-gray-200 hover:bg-white px-3 py-2 text-sm font-semibold hover:scale-105 text-black shadow-sm transition ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'>
                Accept all
              </button>
              <button
                type='button'
                onClick={() => {
                  onPrivacyPolicyAccept(false)
                  setToggle(false)
                }}
                className='text-sm font-semibold leading-6 text-gray-200 hover:text-gray-400 transition ease-out'>
                Reject all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
