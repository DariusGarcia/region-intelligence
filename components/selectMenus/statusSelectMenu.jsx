import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import StatusModal from '../statusModal'

export default function StatusSelectMenu({ onSelect, status }) {
  const [selected, setSelected] = useState('')
  const [isHovered, setIsHovered] = useState(false)

  const handleSelect = (selectedOption) => {
    setSelected(selectedOption)
    onSelect(selectedOption)
  }

  const handleStatusIconClick = () => {
    setIsHovered(!isHovered)
    setTimeout(() => {
      setIsHovered(false)
    }, 10000)
  }

  return (
    <Listbox value={selected} onChange={handleSelect}>
      {({ open }) => (
        <>
          <Listbox.Label className='block text-md font-medium leading-6 text-gray-900'>
            <div className='flex flex-row gap-2 items-center'>
              <p> Filter by project status</p>
              <p className='flex flex-row w-min cursor-pointer '>
                <QuestionMarkCircleIcon
                  className='h-7 w-5 text-black hover:text-gray-400 hover:scale-105 transition ease-out'
                  onClick={handleStatusIconClick}
                />
              </p>
            </div>
            {isHovered && <StatusModal />}
          </Listbox.Label>
          <div className='relative '>
            <Listbox.Button className='relative w-full cursor-default rounded-md  bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6'>
              <span className='block truncate'>
                {selected ? selected : 'All'}
              </span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ChevronUpDownIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {status.map((city, id) => (
                  <Listbox.Option
                    key={id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-blue-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={city}>
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}>
                          {city}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-blue-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}>
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
