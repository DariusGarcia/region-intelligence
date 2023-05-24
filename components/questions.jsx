import { useState } from 'react'
import RadioGroup from './radioGroup'

export default function Questions({
  onIndustryChange,
  onCityChange,
  onFoundUsChange,
  onCommunicationMethodChange,
  onBackgroundChange,
}) {
  const handleRadioSelection = (value) => {
    onBackgroundChange(value) // Pass the selected value to the parent component
  }

  return (
    <div className='pt-4'>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Additional Information
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Please answer these questions so that we can get to know you better.
          </p>

          <div className='mt-10 '>
            <RadioGroup onInputChange={handleRadioSelection} />
            <section className='flex flex-col gap-8'>
              <div className='w-full'>
                <label
                  htmlFor='username'
                  className='mt-8 mb-4 block font-medium leading-6 text-gray-900'
                >
                  Industry
                </label>
                <div className='w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 '>
                  <input
                    type='text'
                    name='industry'
                    id='industry'
                    required={true}
                    className='w-full block border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                    placeholder='Real estate'
                    onChange={(e) => onIndustryChange(e.target.value)}
                  />
                </div>
              </div>
              <div className='w-full'>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  What city are you based in?
                </label>
                <div className='mt-2 flex items-center gap-x-3'>
                  <input
                    id='city'
                    name='city'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                    defaultValue={''}
                    onChange={(e) => onCityChange(e.target.value)}
                  />
                </div>
              </div>
              <div className=''>
                <label
                  htmlFor='photo'
                  name='foundUs'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  How did you find out about us?
                </label>
                <div className='mt-2 flex items-center gap-x-3'>
                  <input
                    type='text'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                    onChange={(e) => onFoundUsChange(e.target.value)}
                  />
                </div>
              </div>
              <div className='col-span-full'>
                <label
                  htmlFor='cover-photo'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Preferred method of communication
                </label>
                <div className=' flex justify-center rounded-lg '>
                  <select
                    id='location'
                    name='location'
                    defaultChecked={'Please select'}
                    className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6'
                    onChange={(e) =>
                      onCommunicationMethodChange(e.target.value)
                    }
                  >
                    <option>Please select</option>
                    <option>Phone Call</option>
                    <option>Text message</option>
                    <option>Email</option>
                  </select>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
