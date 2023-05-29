import React, { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Pagination = ({ items, itemsPerPage, children }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    setTotalPages(Math.ceil(items.length / itemsPerPage))
  }, [items, itemsPerPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPageItems = items.slice(startIndex, endIndex)

  const getDisplayPages = () => {
    const totalDisplayPages = 6
    const pageRange = Math.min(totalDisplayPages, totalPages)
    const currentPageIndex = currentPage - 1
    const displayPages = []

    if (totalPages <= totalDisplayPages) {
      for (let i = 0; i < totalPages; i++) {
        displayPages.push(i + 1)
      }
    } else if (currentPageIndex <= 2) {
      for (let i = 0; i < pageRange - 1; i++) {
        displayPages.push(i + 1)
      }
      displayPages.push('...')
      displayPages.push(totalPages)
    } else if (currentPageIndex >= totalPages - 3) {
      displayPages.push(1)
      displayPages.push('...')
      for (let i = totalPages - pageRange + 2; i <= totalPages; i++) {
        displayPages.push(i)
      }
    } else {
      displayPages.push(1)
      displayPages.push('...')
      for (let i = currentPageIndex - 1; i <= currentPageIndex + 1; i++) {
        displayPages.push(i + 1)
      }
      displayPages.push('...')
      displayPages.push(totalPages)
    }

    return displayPages
  }

  const handlePageClick = (event, page) => {
    event.preventDefault()
    handlePageChange(page)
  }

  return (
    <>
      {children(currentPageItems)}
      <div className='flex items-center justify-between border-t border-gray-200 bg-white  py-3 '>
        <div className='flex flex-1 justify-between sm:hidden'>
          <a
            href='#'
            onClick={(event) => handlePageClick(event, currentPage - 1)}
            className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
          >
            Previous
          </a>
          <a
            href='#'
            onClick={(event) => handlePageClick(event, currentPage + 1)}
            className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
          >
            Next
          </a>
        </div>
        <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm text-gray-700'>
              Showing <span className='font-medium'>{startIndex + 1}</span> to{' '}
              <span className='font-medium'>
                {Math.min(endIndex, items.length)}
              </span>{' '}
              of <span className='font-medium'>{items.length}</span> results
            </p>
          </div>
          <div>
            <nav
              className='isolate inline-flex -space-x-px rounded-md shadow-sm'
              aria-label='Pagination'
            >
              <a
                href='#'
                onClick={(event) => handlePageClick(event, currentPage - 1)}
                className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              >
                <span className='sr-only'>Previous</span>
                <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
              </a>
              {getDisplayPages().map((page, index) => (
                <React.Fragment key={index}>
                  {page === '...' ? (
                    <span className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'>
                      ...
                    </span>
                  ) : (
                    <a
                      href='#'
                      onClick={(event) => handlePageClick(event, page)}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-900'
                      } ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                    >
                      {page}
                    </a>
                  )}
                </React.Fragment>
              ))}
              <a
                href='#'
                onClick={(event) => handlePageClick(event, currentPage + 1)}
                className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              >
                <span className='sr-only'>Next</span>
                <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pagination
