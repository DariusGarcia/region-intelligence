import React from 'react'

export default function ExpandableRowOverview({ record }) {
  // Define an array of objects similar to overviewGridContent
  const overviewGridContent = [
    {
      key: 5,
      label: 'Address',
      value: '2342 Wilshire St, Buena Park 90233, CA',
    },
    { key: 6, label: 'Applicant', value: 'John Doe' },
    { key: 8, label: 'APN(s)', value: '8675309' },
    { key: 9, label: 'Date', value: '9047 The Wave' },
    {
      key: 11,
      label: 'Description',
      value:
        'The applicant wants to build an ADU on an existing 1800 sqft lot.',
    },
    { key: 10, label: 'Permit', value: record.title },
  ]

  return (
    <div className='border-2 border-gray-100 p-4 rounded-md shadow-sm'>
      <div className='px-4 sm:px-0'>
        <h3 className='text-base font-semibold leading-7 text-gray-900'>
          Overview
        </h3>
      </div>
      <div className='mt-0'>
        <dl className='grid grid-cols-1 sm:grid-cols-2'>
          {/* Map over the array and render each item */}
          {overviewGridContent.map((item) => (
            <div
              key={item.key}
              className='border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-600'>
                {item.label}
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-900 sm:mt-2'>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
