import { useState } from 'react'
// import permitData from '../../data/permits'
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
        <h2 className='px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8'>
          Latest activity
        </h2>
        <table className='mt-6 w-full whitespace-nowrap text-left'>
          <colgroup>
            <col className='w-1/12' />
            <col className='w-1/12' />
            <col className='w-1/12' />
            <col className='w-1/12' />
            <col className='w-1/12' />
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
                Location
              </th>
              <th
                scope='col'
                className='table-cell text-left py-2 pl-8 md:pl-0 md:pr-8 font-semibold sm:table-cell'
              >
                Lot size
              </th>
              <th
                scope='col'
                className='py-2  pl-8 md:pl-0 md:pr-8 font-semibold sm:table-cell'
              >
                Contact
              </th>
              <th
                scope='col'
                className='py-2 pl-0 pr-4 font-semibold sm:pr-8 sm:text-left lg:pr-20'
              >
                Status
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
                <td className=' py-4 pl-0 pr-4 sm:table-cell sm:pr-8'>
                  <div className='flex gap-x-3'>
                    <div className='font-mono text-sm  leading-6 text-gray-400'>
                      {item.location}
                    </div>
                  </div>
                </td>
                <td className='py-4 pl-8 md:pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20'>
                  <div className='flex items-center justify-end gap-x-2 sm:justify-start'>
                    <p className=' text-white sm:block'>{item.lotSize}</p>
                  </div>
                </td>
                <td className='py-4 pl-8 md:pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20'>
                  <div className='flex flex-col'>
                    <p>{item.projectManager}</p>
                    <p>{item.phoneNumber}</p>
                  </div>
                </td>
                <td className='py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20'>
                  <div className='flex flex-row items-center gap-2'>
                    <div
                      className={classNames(
                        statuses[item.status],
                        'flex-none rounded-full text-center h-max p-1'
                      )}
                    >
                      <div className='h-1.5 w-1.5 rounded-full bg-current' />
                    </div>
                    <div className=' text-white sm:block'>{item.status}</div>
                  </div>
                  <p>{item.lastProjectUpdate}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
  lotSize: item.lotSize,
  phoneNumber: item.phoneNumber,
}))

const statuses = {
  Completed: 'text-green-400 bg-green-400/10',
  'In Process': 'text-yellow-400 bg-yellow-400/10',
  'Under Review': 'text-rose-400 bg-rose-400/10',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
