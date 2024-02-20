import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from 'antd'
import Steps from '@/features/survey/steps'
import { CheckIcon } from '@heroicons/react/20/solid'
import states from '@/features/survey/statesList'

const steps = [
  { name: 'Step 1', href: '#', status: 'complete' },
  { name: 'Step 2', href: '#', status: 'complete' },
  { name: 'Step 3', href: '#', status: 'current' },
  { name: 'Step 4', href: '#', status: 'upcoming' },
  { name: 'Step 5', href: '#', status: 'upcoming' },
]

export default function SurveyPage() {
  const [currentStep, setCurrentStep] = useState(0)

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex)
  }

  return (
    <div className='overflow-hidden rounded-lg bg-white shadow'>
      <div className='flex justify-center mt-12 px-4 py-5 sm:px-6'>
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
        <nav aria-label='Progress'>
          <ol role='list' className='flex items-center'>
            {steps.map((step, stepIdx) => (
              <li
                key={step.name}
                onClick={() => handleStepClick(stepIdx)}
                className={classNames(
                  stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
                  'relative'
                )}>
                {stepIdx < currentStep ? (
                  <>
                    <div
                      className='absolute inset-0 flex items-center'
                      aria-hidden='true'>
                      <div className='h-0.5 w-full bg-blue-600' />
                    </div>
                    <a
                      href='#'
                      className='relative flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-900'>
                      <CheckIcon
                        className='h-5 w-5 text-white'
                        aria-hidden='true'
                      />
                      <span className='sr-only'>{step.name}</span>
                    </a>
                  </>
                ) : stepIdx === currentStep ? (
                  <>
                    <div
                      className='absolute inset-0 flex items-center'
                      aria-hidden='true'>
                      <div className='h-0.5 w-full bg-gray-200' />
                    </div>
                    <a
                      href='#'
                      className='relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white'
                      aria-current='step'>
                      <span
                        className='h-2.5 w-2.5 rounded-full bg-blue-600'
                        aria-hidden='true'
                      />
                      <span className='sr-only'>{step.name}</span>
                    </a>
                  </>
                ) : (
                  <>
                    <div
                      className='absolute inset-0 flex items-center'
                      aria-hidden='true'>
                      <div className='h-0.5 w-full bg-gray-200' />
                    </div>
                    <a
                      href='#'
                      className='group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400'>
                      <span
                        className='h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300'
                        aria-hidden='true'
                      />
                      <span className='sr-only'>{step.name}</span>
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      {/* Content goes here */}
      {/* Step 1 */}
      {/* Render the current step based on the currentStep state */}
      <div className='flex flex-col md:flex-row justify-around md:mt-12 px-4 py-5 sm:p-6'>
        {currentStep === 0 && (
          <div className='flex flex-col md:flex-row max-w-4xl w-full justify-between md:mt-12 px-4 py-5 sm:p-6'>
            <form className='flex flex-col gap-12 md:w-96'>
              <div className='relative '>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  First Name
                </label>
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  className='block w-full h-12 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Enter first name'
                />
              </div>
              <div className='relative'>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Last Name
                </label>
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  className='block w-full h-12 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Enter last name'
                />
              </div>
              <div className='relative'>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Preferred Name (Optional)
                </label>
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  className='block w-full h-12 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Enter Nickname'
                />
              </div>
              <Button className='h-12 bg-blue-600 text-white'>Next</Button>
            </form>
            <section className='mt-12 md:mt-0'>
              <Image
                src='/survey/step1.png'
                width={300}
                height={300}
                alt='step 1'
              />
            </section>
          </div>
        )}
        {currentStep === 1 && (
          <div className='flex flex-col md:flex-row max-w-4xl w-full justify-between md:mt-12 px-4 py-5 sm:p-6'>
            {/* Step 2 content */}
            <form className='flex flex-col gap-12 md:w-96'>
              <section className='flex flex-row justify-between items-end gap-4'>
                <div className='relative w-72'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium leading-6 text-gray-900 pb-2'>
                    Location (City)
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    className='block w-full h-12 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    placeholder='Enter city'
                  />
                </div>
                <div className='w-36'>
                  <label
                    htmlFor='location'
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    Location (states)
                  </label>
                  <select
                    id='location'
                    name='location'
                    className='mt-2 block h-12 w-full rounded-sm border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue='Canada'>
                    {states?.map((state) => (
                      <option key={state.id}>{state.name}</option>
                    ))}
                  </select>
                </div>
              </section>{' '}
              <div className='relative'>
                <label
                  htmlFor='birthday'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Date of Birth
                </label>
                <input
                  type='text'
                  name='birthday'
                  id='birthday'
                  className='block w-full h-12 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='mm/dd/yyyy'
                />
              </div>
              <div className='relative'>
                <label
                  htmlFor='education'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Education Background
                </label>
                <select
                  id='location'
                  name='location'
                  className='mt-2 block h-12 w-full rounded-sm border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  defaultValue='Canada'>
                  {educationList?.map((school) => (
                    <option key={school.id}>{school.name}</option>
                  ))}
                </select>
              </div>
              <Button className='h-12 bg-blue-600 text-white'>Next</Button>
            </form>
            <section className='mt-12 md:mt-0'>
              <Image
                src='/survey/step2.png'
                width={300}
                height={300}
                alt='step 1'
              />
            </section>
          </div>
        )}
      </div>
    </div>
  )
}

const educationList = [
  { id: 1, name: 'Some High School' },
  { id: 2, name: 'High School Diploma' },
  { id: 3, name: "Associate's Degree" },
  { id: 4, name: "Bachelor's Degree" },
  { id: 5, name: 'Post-Graduate Masters' },
  { id: 6, name: 'Post-Graduate Doctoral' },
  { id: 7, name: 'Other' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
