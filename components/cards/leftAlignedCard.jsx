import capitalizeWords from '@/utils/capitalizeWords'
import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function LeftAlignedCard({ data }) {
  return (
    <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <div className='flex flex-col px-4 py-6 sm:px-6 w-full'>
              <h3 className='text-md font-semibold leading-7 text-blue-600 mb-4'>
                Project Information
              </h3>
              <p className=' text-3xl font-medium mb-4 mt-1 max-w-2xl  leading-6  text-gray-900'>
                {item.caseNumbers}
              </p>
              <p className=' text-xl font-medium mb-4 mt-1 max-w-2xl  leading-6  text-gray-900'>
                {capitalizeWords(item.listingNames)}
              </p>
            </div>
            <div className='border-t border-gray-100 w-full'>
              <dl className='divide-y divide-gray-100'>
                <div className='flex flex-col px-4 py-6  sm:gap-4 sm:px-6 w-96 lg:w-[600px]'>
                  {item.imageUrls === 'None' ? (
                    <img
                      src='https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?w=1200&ssl=1'
                      alt='image'
                      className='rounded-md shadow-md'
                    />
                  ) : (
                    <img
                      alt='project'
                      className='h-full w-full shadow-md rounded-md'
                      src={item.imageUrls}
                    />
                  )}
                  <p className='mt-4 italic'>
                    Last update: {item.recentUpdate}
                  </p>
                  <dt className='text-md mt-8 font-medium text-gray-900'>
                    Project address
                  </dt>
                  <dd className='mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                    {item.projectLocations}, {item.city}, CA
                  </dd>
                </div>
                <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-md font-medium text-gray-900'>
                    Applicant
                  </dt>
                  <dd className='mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                    {capitalizeWords(item.applicant)}
                  </dd>
                </div>
                <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-md font-medium text-gray-900'>
                    Applicant email address
                  </dt>
                  <dd className='mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                    {item.applicantEmail}
                  </dd>
                </div>
                <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-md font-medium text-gray-900'>
                    Project manager
                  </dt>
                  <dd className='mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                    {item.plannerName === null || item.plannerName == ''
                      ? 'Undisclosed'
                      : item.plannerName}
                  </dd>
                </div>
                <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-md font-medium text-gray-900'>
                    Planner's phone number
                  </dt>
                  <dd className='mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                    {item.plannerPhone}
                  </dd>
                </div>
                <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-md font-medium leading-6 text-gray-900'>
                    Planner's email address
                  </dt>
                  <dd className='mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                    {item.plannerEmail}
                  </dd>
                </div>
                <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-md font-medium leading-6 text-gray-900'>
                    Type of use
                  </dt>
                  <dd className='mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                    {item.typeOfUse}
                  </dd>
                </div>
                <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-md font-medium leading-6 text-gray-900'>
                    Project description
                  </dt>
                  <dd className='mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                    <p className='list-disc max-w-lg text-left'>
                      {item.projectDescriptions}
                    </p>
                  </dd>
                </div>
                <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-md font-medium leading-6 text-gray-900'>
                    Project status
                  </dt>
                  <dd className='mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                    <p className='list-disc max-w-lg text-left'>
                      {item.projectStatus}
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
    </div>
  )
}
