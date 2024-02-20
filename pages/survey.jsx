import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from 'antd'
import Steps from '@/features/survey/steps'
import { CheckIcon } from '@heroicons/react/20/solid'
import states from '@/features/survey/statesList'
import { Checkbox } from 'antd'
import { RadioGroup } from '@headlessui/react'

export default function SurveyPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [frequency, setFrequency] = useState(frequencies[0])

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex)
  }

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  // checkbox group
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues)
  }

  return (
    <div className='overflow-hidden rounded-lg bg-white shadow'>
      <div className='flex justify-center mt-12 px-4 py-5 sm:px-6'>
        {/* Step counter */}
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
      {/* Main content goes here */}
      {/* Render the current step based on the currentStep state */}
      <div className='flex flex-col md:flex-row justify-around md:mt-0 px-4 py-5 sm:p-6'>
        {/* Step 1 */}
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
                  className='block w-full h-12 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
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
                  className='block w-full h-12 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
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
                  className='block w-full h-12 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  placeholder='Enter Nickname'
                />
              </div>
              <Button
                onClick={handleNextStep}
                className='h-12 bg-blue-600 text-white'>
                Next
              </Button>
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
        {/* Step 2 */}
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
                    className='block w-full h-12 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
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
                    className='mt-2 block h-12 w-full rounded-sm border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6'
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
                  className='block w-full h-12 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
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
                  className='mt-2 block h-12 w-full rounded-sm border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6'
                  defaultValue='Canada'>
                  {educationList?.map((school) => (
                    <option key={school.id}>{school.name}</option>
                  ))}
                </select>
              </div>
              <Button
                onClick={handleNextStep}
                className='h-12 bg-blue-600 text-white'>
                Next
              </Button>
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
        {/* Step 3 */}
        {currentStep === 2 && (
          <div className='flex flex-col md:flex-row max-w-4xl w-full justify-between md:mt-12 px-4 py-5 sm:p-6'>
            <form className='flex flex-col gap-12 md:w-96'>
              <div className='relative '>
                <label
                  htmlFor='company'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Company/Organization
                </label>
                <input
                  type='text'
                  name='company'
                  id='company'
                  className='block w-full h-12 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  placeholder='Acme Corp.'
                />
              </div>
              <div className='relative'>
                <label
                  htmlFor='role'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Role/Title
                </label>
                <input
                  type='text'
                  name='role'
                  id='role'
                  className='block w-full h-12 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  placeholder='Director of Operations'
                />
              </div>
              <div className='relative'>
                <label
                  htmlFor='industry'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Field/Industry
                </label>
                <input
                  type='text'
                  name='industry'
                  id='industry'
                  className='block w-full h-12 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                  placeholder='Real Estate Development '
                />
              </div>
              <Button
                onClick={handleNextStep}
                className='h-12 bg-blue-600 text-white'>
                Next
              </Button>
            </form>
            <section className='mt-12 md:mt-0'>
              <Image
                src='/survey/step3.png'
                width={300}
                height={300}
                alt='step 1'
              />
            </section>
          </div>
        )}
        {/* Step 4 */}
        {currentStep === 3 && (
          <div className='flex flex-col items-center md:flex-row max-w-4xl w-full justify-between md:mt-12 px-4 py-5 sm:p-6'>
            <div>
              <h2 className='font-bold mb-6 text-xl'>
                Please select your top five interests
              </h2>
              <Checkbox.Group
                options={plainOptions}
                defaultValue={['Apple']}
                onChange={onChange}
              />
              <br />
              <br />
              <Checkbox.Group
                options={options}
                defaultValue={['Pear']}
                onChange={onChange}
              />
              <br />
              <br />
              <Checkbox.Group
                options={options}
                defaultValue={['Pear']}
                onChange={onChange}
              />
              <br />
              <br />
              <Checkbox.Group
                options={options}
                defaultValue={['Pear']}
                onChange={onChange}
              />
              <br />
              <br />
              <Checkbox.Group
                options={options}
                defaultValue={['Pear']}
                onChange={onChange}
              />
              <br />
              <br />
              <Button
                onClick={handleNextStep}
                className='h-12 w-full mt-12 bg-blue-600 text-white'>
                Next
              </Button>
            </div>
            <section className='mt-12 md:mt-0'>
              <Image
                src='/survey/step4.png'
                width={300}
                height={300}
                alt='step 1'
              />
            </section>
          </div>
        )}
        {/* Step 5 */}
        {currentStep === 4 && (
          <div className='flex flex-col items-center md:flex-row max-w-4xl w-full justify-between md:px-4 py-5 sm:p-6'>
            <div className='bg-white'>
              <div className='mx-auto max-w-7xl px-0 lg:px-8'>
                <div className='mx-auto max-w-4xl text-center'>
                  <h2 className='text-base font-semibold leading-7 text-blue-600'>
                    Pricing
                  </h2>
                  <p className='mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                    Select a plan and start your free 7 day trial.
                  </p>
                </div>
                <div className='mt-8 flex justify-center'>
                  <RadioGroup
                    value={frequency}
                    onChange={setFrequency}
                    className='grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200'>
                    <RadioGroup.Label className='sr-only'>
                      Payment frequency
                    </RadioGroup.Label>
                    {frequencies.map((option) => (
                      <RadioGroup.Option
                        key={option.value}
                        value={option}
                        className={({ checked }) =>
                          classNames(
                            checked
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-500',
                            'cursor-pointer rounded-full px-2.5 py-1'
                          )
                        }>
                        <span>{option.label}</span>
                      </RadioGroup.Option>
                    ))}
                  </RadioGroup>
                </div>
                <div className='relative isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
                  {tiers.map((tier) => (
                    <>
                      <label
                        htmlFor='name'
                        className='hidden lg:inline-block lg:absolute -top-6 right-32 p-2 rounded-md bg-blue-600 px-1 text-xs font-medium text-white'>
                        Recommended
                      </label>
                      <div
                        key={tier.id}
                        className={classNames(
                          tier.featured
                            ? 'bg-gray-900 ring-gray-900'
                            : 'ring-gray-200',
                          'rounded-3xl p-8 ring-1 xl:p-10 w-full md:w-96 shadow-xl'
                        )}>
                        <h3
                          id={tier.id}
                          className={classNames(
                            tier.featured ? 'text-white' : 'text-gray-900',
                            'text-lg font-semibold leading-8'
                          )}>
                          {tier.name}
                        </h3>

                        <p className='mt-6 flex items-baseline gap-x-1'>
                          <span
                            className={classNames(
                              tier.featured ? 'text-white' : 'text-gray-900',
                              'text-4xl font-bold tracking-tight'
                            )}>
                            {typeof tier.price === 'string'
                              ? tier.price
                              : tier.price[frequency.value]}
                          </span>
                          {typeof tier.price !== 'string' ? (
                            <span
                              className={classNames(
                                tier.featured
                                  ? 'text-gray-300'
                                  : 'text-gray-600',
                                'text-sm font-semibold leading-6'
                              )}>
                              {frequency.priceSuffix}
                            </span>
                          ) : null}
                        </p>
                        <a
                          href={tier.href}
                          aria-describedby={tier.id}
                          className={classNames(
                            tier.featured
                              ? 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                              : 'bg-blue-600 text-white shadow-sm hover:bg-blue-500 focus-visible:outline-blue-600',
                            'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                          )}>
                          {tier.cta}
                        </a>
                        <ul
                          role='list'
                          className={classNames(
                            tier.featured ? 'text-gray-300' : 'text-gray-600',
                            'mt-8 space-y-3 text-sm leading-6 xl:mt-10'
                          )}>
                          {tier.features.map((feature) => (
                            <li key={feature} className='flex gap-x-3'>
                              <CheckIcon
                                className={classNames(
                                  tier.featured
                                    ? 'text-white'
                                    : 'text-blue-600',
                                  'h-6 w-5 flex-none'
                                )}
                                aria-hidden='true'
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  {
    name: 'Basic Plan',
    id: 'tier-basic',
    href: '#',
    price: { monthly: '$249', annually: '$199 ' },
    description: 'The essentials to provide your best work for clients.',
    features: [
      'City Agenda Updates',
      'City Land Use Trends',
      '4 Monthly Reports',
      'Demographics Insights',
    ],
    unavailableFeatures: ['Free Domain', 'Free Domain'],
    featured: false,
    cta: 'Start now',
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '#',
    price: { monthly: '$299', annually: '$349' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      'City Agenda Updates',
      'City Land Use Trends',
      '4 Monthly Reports',
      'Demographics Insights',
      'Live Land Pricing',
      'Live Notifications',
    ],
    featured: true,
    cta: 'Start now',
  },
]

const educationList = [
  { id: 1, name: 'Some High School' },
  { id: 2, name: 'High School Diploma' },
  { id: 3, name: "Associate's Degree" },
  { id: 4, name: "Bachelor's Degree" },
  { id: 5, name: 'Post-Graduate Masters' },
  { id: 6, name: 'Post-Graduate Doctoral' },
  { id: 7, name: 'Other' },
]

const plainOptions = ['Apple', 'Pear', 'Orange', 'Orange']
const options = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
  },
]

const steps = [
  { name: 'Step 1', href: '#', status: 'complete' },
  { name: 'Step 2', href: '#', status: 'complete' },
  { name: 'Step 3', href: '#', status: 'current' },
  { name: 'Step 4', href: '#', status: 'upcoming' },
  { name: 'Step 5', href: '#', status: 'upcoming' },
]
