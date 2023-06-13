import React, { useState } from 'react'
import Link from 'next/link'
import capitalizeWords from '@/utils/capitalizeWords'
import Pagination from '@/components/pagination'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import StatusModal from '../statusModal'

export default function DataTable({ permits }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPermits, setFilteredPermits] = useState([])
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(!isHovered)
  }

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value
    setSearchTerm(searchTerm)

    const filteredPermits = permits.filter(
      (item) =>
        item.caseNumbers.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.projectLocations
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.plannerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.listingNames?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.projectStatus.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredPermits(filteredPermits)
  }

  const permitsToDisplay = searchTerm ? filteredPermits : permits
  return (
    <div className='overflow-x-auto w-full'>
      <form className='w-full md:max-w-7xl lg:min-w-[1200px] lg:w-[1250px] overflow-x'>
        <input
          className='w-full rounded-md border-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600 sm:text-sm'
          type='text'
          placeholder='Search for a project or city...'
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              setSearchTerm('')
            }
          }}
        />

        <header className='grid grid-cols-5 w-full gap-2 border mt-4 p-2 rounded-sm border-b-2 font-medium justify-center text-center'>
          <div className='absolute right-40 pb-24 bottom-50 '>
            {isHovered && <StatusModal />}
          </div>
          <p className='text-left w-full'>Project Name</p>
          <p className='text-left w-full'>Address</p>
          <p className='text-left w-full'>City</p>
          <p className='text-left w-full'>Applicant</p>
          <div className='flex flex-row w-full gap-2 justify-center items-center '>
            {' '}
            <p className='text-left '>Status</p>{' '}
            <p className='flex flex-row w-min cursor-pointer '>
              <QuestionMarkCircleIcon
                className='h-7 w-7 text-black hover:text-gray-400 hover:scale-105 transition ease-out'
                onClick={handleMouseEnter}
              />
            </p>
          </div>
        </header>

        <Pagination items={permitsToDisplay} itemsPerPage={25}>
          {(currentPageItems) => (
            <ul>
              {currentPageItems.map((item) => (
                <li
                  key={item.id}
                  className='grid grid-cols-5 w-full gap-2 border p-2 hover:bg-gray-50'>
                  <Link
                    className='text-sm text-blue-600 hover:text-blue-500 underline flex flex-col gap-2'
                    href={`/land-directory/list-view/${item.id}`}>
                    <p> {item.caseNumbers}</p>
                    <p>
                      {item.listingNames && item.listingNames?.slice(0, 25)}
                      ...
                    </p>
                  </Link>

                  <p className='text-sm'>{item.projectLocations}</p>
                  <p className='text-sm'>{item.city}, CA</p>
                  <p className='text-sm'>{capitalizeWords(item.applicant)}</p>
                  <p className='text-sm'>{item.projectStatus}</p>
                </li>
              ))}
            </ul>
          )}
        </Pagination>
      </form>
    </div>
  )
}
