import React from 'react'
import { MdPeopleAlt } from 'react-icons/md'
import { FaDollarSign } from 'react-icons/fa'
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/solid'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'

export default function Stats() {
  return (
    <div className='mt-12'>
      <h3 className='text-lg font-bold leading-6  text-gray-900'>
        Development Activity
      </h3>
      <dl className='mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-x md:divide-y-0'>
        {stats.map((item) => (
          <div key={item.name} className='px-4 py-5 sm:p-6'>
            <dd className='mt-1 flex flex-row items-center justify-between md:block lg:flex'>
              <section>
                <div className='flex items-baseline text-2xl font-bold '>
                  {item.stat}
                </div>
                <dt className='text-base font-normal text-gray-900 mb-4'>
                  {item.name}
                </dt>
                <div
                  className={classNames(
                    item.changeType === 'increase'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800',
                    'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                  )}>
                  {item.changeType === 'increase' ? (
                    <ArrowUpIcon
                      className='-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500'
                      aria-hidden='true'
                    />
                  ) : (
                    <ArrowDownIcon
                      className='-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500'
                      aria-hidden='true'
                    />
                  )}

                  <span className='sr-only'>
                    {' '}
                    {item.changeType === 'increase'
                      ? 'Increased'
                      : 'Decreased'}{' '}
                    by{' '}
                  </span>
                  {item.change}
                </div>
              </section>
              {/* icon */}
              <div className='w-12 bg-blue-200 text-blue-600 flex justify-center p-2 rounded-full mr-12'>
                <item.icon size={30} />
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

const stats = [
  {
    name: 'Total Parcels',
    stat: '5.3m',
    previousStat: '',
    change: '12%',
    changeType: 'increase',
    icon: FaDollarSign,
  },
  {
    name: 'New Projects',
    stat: '230',
    previousStat: '',
    change: '15.34%',
    changeType: 'increase',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Active Projects',
    stat: '48',
    previousStat: '',
    change: '4.05%',
    changeType: 'decrease',
    icon: UserIcon,
  },
  {
    name: 'Population',
    stat: '8.3m',
    previousStat: '',
    change: '4.05%',
    changeType: 'decrease',
    icon: MdPeopleAlt,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
