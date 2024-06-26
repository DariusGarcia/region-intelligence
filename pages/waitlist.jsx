import { useState } from 'react'
import Link from 'next/link'
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { Button } from 'antd'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)

  const validateEmail = (input) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(input)
  }

  const handleChangeEmail = (e) => {
    const inputValue = e.target.value
    setEmail(inputValue)
    setIsValidEmail(validateEmail(inputValue))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValidEmail) {
      // If email is valid, submit the form
      console.log('Form submitted with email:', email)
    } else {
      // If email is invalid, show error message or handle accordingly
      console.error('Invalid email:', email)
    }
  }
  return (
    <div className='flex flex-col w-full items-center mt-6 md:my-12 mb-24 p-6 bg-white'>
      <nav className='flex flex-col md:flex-row gap-6 justify-between w-full items-center max-w-7xl'>
        <Link href='/' className='mb-8 lg:mb-0'>
          <img src='/logos/logo3.svg' alt='logo' className='w-24' />
        </Link>
        <div className='flex flex-row gap-12 items-center'>
          <Link
            href='/about'
            className='font-semibold underline hover:text-gray-500 transition ease-out'>
            ABOUT US
          </Link>
          <Link
            href='/about'
            className='font-semibold border-2 rounded-xl p-2 border-black hover:bg-gray-300 transition ease-out'>
            GRAB AN INVITE
          </Link>
        </div>
      </nav>
      <main className='flex flex-col md:flex-row justify-between w-full max-w-7xl mt-12'>
        <div className='md:w-1/2 w-full flex flex-col gap-12'>
          <p className='text-lg font-semibold'>JOIN OUR WAITING LIST</p>
          <p className='font-semibold text-md md:w-96'>
            Region Intelligence is a brand new way to perform due diligence on
            investments.{' '}
          </p>
          <p className='font-semibold text-md md:w-96'>
            We're diligently working on bringing you the new product. As we iron
            out the final details, we invite you to be a part of our journey.{' '}
          </p>
          <form action='' className='flex flex-col gap-8'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  placeholder='Your name'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Email
              </label>
              <div className='relative mt-2 rounded-md shadow-sm'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className={`block w-full rounded-md border-0 py-1.5 pr-10 ${
                    isValidEmail
                      ? 'text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600'
                      : 'text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500'
                  } sm:text-sm sm:leading-6`}
                  placeholder='you@example.com'
                  value={email}
                  onChange={handleChangeEmail}
                  aria-invalid={!isValidEmail}
                />
                {!isValidEmail && (
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                    <ExclamationCircleIcon
                      className='h-5 w-5 text-red-500'
                      aria-hidden='true'
                    />
                  </div>
                )}
              </div>
              {!isValidEmail && (
                <p className='mt-2 text-sm text-red-600' id='email-error'>
                  Not a valid email address.
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor='organization'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Organization
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='organization'
                  id='organization'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  placeholder='Your organization'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='title'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Title
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='title'
                  id='title'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  placeholder='Your position title'
                />
              </div>
            </div>
            <div className='relative flex flex-col gap-12 items-start w-full'>
              <div className='flex'>
                <div className='flex h-6 items-center'>
                  <input
                    id='terms'
                    aria-describedby='terms-description'
                    name='terms'
                    type='checkbox'
                    className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600'
                  />
                </div>
                <div className='ml-3 text-sm leading-6'>
                  <label htmlFor='terms' className='font-medium text-gray-900'>
                    Terms of Service & Privacy Policy
                  </label>
                </div>
              </div>
              <div className='flex'>
                <div className='flex h-6 items-center'>
                  <input
                    id='notify'
                    aria-describedby='notify-description'
                    name='notify'
                    type='checkbox'
                    className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600'
                  />
                </div>
                <div className='ml-3 text-sm leading-6'>
                  <label htmlFor='notify' className='font-medium text-gray-900'>
                    Notify me for latest blogs, promotions, and updates
                  </label>
                </div>
              </div>
              <Button className='border-black p-4 w-full  text-center justify-center flex items-center'>
                GET ON THE LIST
              </Button>
            </div>
          </form>
        </div>
        <div className='w-full flex justify-center md:justify-end mt-24 md:mt-0'>
          <img src='/waitlist.png' alt='lady' className='md:h-[30rem]' />
        </div>
      </main>
    </div>
  )
}
