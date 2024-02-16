import React from 'react'

export default function ExpandableRowADUStandards({ record }) {
  // Define an array of objects similar to overviewGridContent
  const overviewGridContent = [
    {
      key: 5,
      label: 'Current Zoning',
      value: 'RS - 6 Residential',
    },
    { key: 6, label: 'CEQA Analysis', value: 'Categorically Exempt' },
    { key: 8, label: 'General Plan Use', value: 'Residential' },
    { key: 9, label: 'Approval Sentiment', value: 'Likely to Pass' },
    {
      key: 11,
      label: 'General Discussion',
      value:
        'The staff reviewed plans and visited the property and is of the opinion that the facility and site are adequate to support the accessory dwelling unit',
    },
  ]

  return (
    <div className='border-2 border-gray-100 p-4 rounded-md shadow-sm'>
      <div className='px-4 sm:px-0'>
        <h3 className='text-base font-semibold leading-7 text-gray-900'>
          Buena Park ADU Standards Check
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
