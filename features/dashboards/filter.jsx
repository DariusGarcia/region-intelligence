import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid'

export default function Filter({ projects }) {
  const [selectedFiltersCount, setSelectedFiltersCount] = useState(0)

  // Count the number of selected filters whenever projects or filters change
  useEffect(() => {
    let count = 0
    Object.values(filters).forEach((filterGroup) => {
      count += filterGroup.filter((filter) => filter.checked).length
    })
    setSelectedFiltersCount(count)
  }, [projects, filters])

  const uniqueCities = Array.from(
    new Set(projects.map((project) => project.city))
  )

  uniqueCities.sort()

  // Function to clear all selected filters
  const clearAllFilters = () => {
    const clearedFilters = { ...filters }
    Object.keys(clearedFilters).forEach((key) => {
      clearedFilters[key] = clearedFilters[key].map((filter) => ({
        ...filter,
        checked: false,
      }))
    })
    setSelectedFiltersCount(0)
  }

  return (
    <div className='bg-white rounded-md'>
      {/* Filters */}
      <Disclosure
        as='section'
        aria-labelledby='filter-heading'
        className='grid items-center '>
        <h2 id='filter-heading' className='sr-only'>
          Filters
        </h2>
        <div className='relative col-start-1 row-start-1 py-4'>
          <div className='flex max-w-7xl space-x-6 divide-x divide-gray-200 px-2 text-sm'>
            <div>
              <Disclosure.Button className='group flex items-center font-medium text-gray-700'>
                <FunnelIcon
                  className='mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500'
                  aria-hidden='true'
                />
                {selectedFiltersCount} Filters
              </Disclosure.Button>
            </div>
            <div className='pl-6'>
              <button
                type='button'
                onClick={clearAllFilters}
                className='text-gray-500'>
                Clear all
              </button>
            </div>
          </div>
        </div>
        <Disclosure.Panel className='border-t border-gray-200 py-10'>
          <div className='mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8'>
            <div className='grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6'>
              <fieldset>
                <legend className='block font-medium'>Cities</legend>
                <div className='space-y-6 pt-6 sm:space-y-4 sm:pt-4'>
                  {uniqueCities.map((option, optionIdx) => (
                    <div
                      key={option.value}
                      className='flex items-center text-base sm:text-sm'>
                      <input
                        id={`price-${optionIdx}`}
                        name='price[]'
                        defaultValue={option}
                        type='checkbox'
                        className='h-4 w-4 flex-shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                      />
                      <label
                        htmlFor={`price-${optionIdx}`}
                        className='ml-3 min-w-0 flex-1 text-gray-600'>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className='block font-medium'>Project Type</legend>
                <div className='space-y-6 pt-6 sm:space-y-4 sm:pt-4'>
                  {filters.projectType.map((option, optionIdx) => (
                    <div
                      key={option.value}
                      className='flex items-center text-base sm:text-sm'>
                      <input
                        id={`color-${optionIdx}`}
                        name='color[]'
                        defaultValue={option.value}
                        type='checkbox'
                        className='h-4 w-4 flex-shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                        defaultChecked={option.checked}
                      />
                      <label
                        htmlFor={`color-${optionIdx}`}
                        className='ml-3 min-w-0 flex-1 text-gray-600'>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className='grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6'>
              <fieldset>
                <legend className='block font-medium'>Date</legend>
                <div className='space-y-6 pt-6 sm:space-y-4 sm:pt-4'>
                  {filters.date.map((option, optionIdx) => (
                    <div
                      key={option.value}
                      className='flex items-center text-base sm:text-sm'>
                      <input
                        id={`size-${optionIdx}`}
                        name='size[]'
                        defaultValue={option.value}
                        type='checkbox'
                        className='h-4 w-4 flex-shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                        defaultChecked={option.checked}
                      />
                      <label
                        htmlFor={`size-${optionIdx}`}
                        className='ml-3 min-w-0 flex-1 text-gray-600'>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </Disclosure.Panel>
        <div className='col-start-1 row-start-1 py-4'>
          <div className='mx-auto flex justify-end px-2'>
            <Menu as='div' className='relative inline-block'>
              <div className='flex'>
                <Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                  Sort
                  <ChevronDownIcon
                    className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                    aria-hidden='true'
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'>
                <Menu.Items className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='py-1'>
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? 'font-medium text-gray-900'
                                : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}>
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </Disclosure>
    </div>
  )
}

const filters = {
  projectType: [
    { value: 'residential', label: 'Residential', checked: false },
    { value: 'commercial', label: 'Commercial', checked: false },
    { value: 'rezoning', label: 'Rezoning', checked: false },
  ],
  date: [
    { value: 'ascending', label: 'Ascending', checked: false },
    { value: 'descending', label: 'Descending', checked: false },
  ],
}
const sortOptions = [
  { name: 'Newest', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
