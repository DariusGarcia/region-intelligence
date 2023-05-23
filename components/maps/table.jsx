import { useState } from 'react'
import permitData from '../../data/permits'
import Pagination from '../pagination'

export default function PermitsTable() {
  const [visibleItems, setVisibleItems] = useState([])

  const toggleVisibility = (item) => {
    const index = visibleItems.indexOf(item)

    if (index !== -1) {
      setVisibleItems((prevVisibleItems) => [
        ...prevVisibleItems.slice(0, index),
        ...prevVisibleItems.slice(index + 1),
      ])
    } else {
      setVisibleItems((prevVisibleItems) => [...prevVisibleItems, item])
    }
  }

  return (
    <>
      <div className='bg-gray-900 py-10 rounded-lg overflow-auto'>
        <h2 className='px-2 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8'>
          Latest activity
        </h2>
        <table className='mt-6 w-full whitespace-nowrap text-left'>
          <colgroup>
            <col className='w-full sm:w-1/12 md:w-2/12' />
            <col className='md:w-1/12 lg:w-2/12' />
            <col className='lg:w-1/12' />
            <col className='lg:w-1/12' />
            <col className='lg:w-1/12' />
          </colgroup>
          <thead className='border-b border-white/10 text-sm leading-6 text-white'>
            <tr>
              <th
                scope='col'
                className='py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8'
              >
                Listing Names
              </th>
              <th scope='col' className='py-2 pr-8 font-semibold text-left '>
                Project Manager
              </th>
              <th
                scope='col'
                className='table-cell text-left py-2 pl-0 pr-8 font-semibold sm:table-cell'
              >
                Status
              </th>
              <th
                scope='col'
                className='hidden py-2 pl-0 pr-8 font-semibold sm:table-cell'
              >
                Location
              </th>
              <th
                scope='col'
                className='py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20'
              >
                Last Update
              </th>

              <th
                scope='col'
                className='hidden py-2 pl-0 pr-4 text-left font-semibold sm:table-cell sm:pr-6 lg:pr-8'
              >
                Description
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-white/5'>
            {activityItems.map((item, index) => (
              <tr key={item.listingNames}>
                <td className='py-4 pl-4 pr-8 sm:pl-6 lg:pl-8'>
                  <div className='flex items-center gap-x-4'>
                    <div className='truncate text-xs font-medium leading-6 text-white'>
                      {item.listingNames}
                    </div>
                  </div>
                </td>
                <td className='hidden py-4 pl-0 pr-4  sm:table-cell sm:pr-8'>
                  <div className='flex gap-x-3'>
                    <div className='font-mono text-sm  leading-6 text-gray-400'>
                      {item.projectManager}
                    </div>
                  </div>
                </td>
                <td className='py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20'>
                  <div className='flex items-center justify-end gap-x-2 sm:justify-start'>
                    <p className='text-gray-400 sm:hidden'>
                      {item.lastProjectUpdate}
                    </p>
                    <div
                      className={classNames(
                        statuses[item.status],
                        'flex-none rounded-full p-1'
                      )}
                    >
                      <div className='h-1.5 w-1.5 rounded-full bg-current' />
                    </div>
                    <div className=' text-white sm:block'>{item.status}</div>
                  </div>
                </td>
                <td className='hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20'>
                  {item.location}
                </td>
                <td className='hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20'>
                  {item.lastProjectUpdate}
                </td>
                <td className='hidden py-4 pl-0 pr-4 text-left text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8'>
                  {visibleItems.includes(item) ? (
                    <>
                      <button
                        className='bg-gray-700 hover:bg-opacity-50 hover:bg-blue-600 transition ease-out w-20 mb-4 text-center text-white p-0.5 rounded-lg'
                        onClick={() => toggleVisibility(item)}
                      >
                        Close
                      </button>
                      <p>{item.description}</p>
                    </>
                  ) : (
                    <>
                      <button
                        className='bg-gray-700 hover:bg-opacity-50 hover:bg-blue-600 transition ease-out w-20 mb-4 text-center text-white p-0.5 rounded-lg'
                        onClick={() => toggleVisibility(item)}
                      >
                        See more
                      </button>
                      <p>{item.description.slice(0, 100)}...</p>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  )
}

const activityItems = permitData.map((item) => ({
  status: item.status,
  projectManager: item.projectManager,
  lastProjectUpdate: item.lastProjectUpdate,
  location: item.location,
  listingNames: item.listingNames,
  description: item.description,
}))

const statuses = {
  Completed: 'text-green-400 bg-green-400/10',
  'In Process': 'text-yellow-400 bg-yellow-400/10',
  'Under Review': 'text-rose-400 bg-rose-400/10',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
