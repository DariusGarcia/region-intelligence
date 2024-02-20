import React, { useState, useRef } from 'react'
import { Space, Pagination, Table, Button, Carousel } from 'antd'
import ExpandableRow from './expandableRow'
import FilterMenu from './tableFilterMenu'

const pageSize = 8

export default function CurrentPlanningDevelopmentsList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedRowKey, setExpandedRowKey] = useState(null)

  const checkbox = useRef()
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedProjects, setSelectedProjects] = useState([])

  const indexOfLastItem = currentPage * pageSize
  const indexOfFirstItem = indexOfLastItem - pageSize
  const currentItems = currentPlanningDevelopments.slice(
    indexOfFirstItem,
    indexOfLastItem
  )

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const totalItems = currentPlanningDevelopments.length

  const columns = [
    {
      title: (
        <input
          type='checkbox'
          checked={checked}
          ref={checkbox}
          indeterminate={indeterminate}
          onChange={toggleAll}
        />
      ),
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <input
          type='checkbox'
          value={record.email}
          checked={selectedProjects.includes(record)}
          onChange={(e) =>
            setSelectedProjects(
              e.target.checked
                ? [...selectedProjects, record]
                : selectedProjects.filter((p) => p !== record)
            )
          }
        />
      ),
    },
    {
      title: 'APN(s)',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Permit',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <p className='w-max'>{text}</p>,
    },
    {
      title: 'Applicant',
      dataIndex: 'applicant',
      key: 'applicant',
      render: (text, record) => <p className='w-max'>{text}</p>,
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      render: (text, record) => <p className='w-max'>{text}</p>,
    },
    {
      title: 'Recent Update',
      dataIndex: 'recentUpdate',
      key: 'recentUpdate',
      render: (text, record) => (
        <Space size='middle'>
          <p className='w-max'>{text}</p>
        </Space>
      ),
    },
    {
      title: '',
      key: 'action',
      render: (text, record) => (
        <Button
          className='rounded-sm text-xs text-blue-500'
          onClick={() => {
            setExpandedRowKey(expandedRowKey === record.key ? null : record.key) // Toggle expanded row key
          }}>
          {expandedRowKey === record.key ? 'Close' : 'View Details'}
        </Button> // Set the expanded row key on click
      ),
    },
    Table.EXPAND_COLUMN,
  ]

  // Function to handle selecting all items
  function toggleAll() {
    setSelectedProjects(
      checked || indeterminate ? [] : currentPlanningDevelopments
    )
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  // "view details" expanded row content
  const expandableRowRender = (record) => {
    return <ExpandableRow record={record} />
  }
  return (
    <div className='rounded-md md:border-2 border-gray-50'>
      <div className='flex flex-row items-start justify-between sm:items-center'>
        <div className='sm:mt-0 sm:flex-none w-full'>
          {/* <FilterMenu projects={currentPlanningDevelopments} /> */}
          <FilterMenu projects={currentPlanningDevelopments} />
        </div>
      </div>
      <div className='table-container overflow-x-auto'>
        <Table
          dataSource={currentItems}
          columns={columns}
          // This handles the "view details" expanded row
          expandable={{
            expandedRowKeys: [expandedRowKey], // Pass the expanded row key
            expandedRowRender: expandableRowRender,
            onExpand: (expanded, record) => {
              if (!expanded) {
                setExpandedRowKey(null) // Reset expanded row key if collapse row
              }
            },
            onRow: (record) => ({
              onClick: () => {
                setExpandedRowKey(
                  record.key === expandedRowKey ? null : record.key
                )
              },
              className:
                record.key === expandedRowKey ? 'bg-red-500' : 'bg-red-500',
            }),
            rowExpandable: (record) => record.name !== 'Not Expandable',
            expandIcon: (
              { expanded } // Remove onExpand from here
            ) => (
              <Button
                className='hidden w-0 '
                onClick={() => setExpandedRowKey(null)}>
                {expanded ? 'Close' : 'View Details'}
              </Button>
            ),
          }}
          pagination={false} // Disable default table pagination
        />
      </div>
      <section className='w-full flex flex-col md:flex-row gap-8 md:gap-0 mt-6 items-center md:items-baseline justify-between pb-8'>
        <Pagination
          current={currentPage}
          defaultCurrent={1}
          pageSize={pageSize}
          total={totalItems}
          onChange={handlePageChange}
        />
        {/* TODO: make the total results accurate */}
        <div className='md:mr-8 flex m-auto md:m-0 md:block'>
          <p className='mt-2 text-sm text-gray-500 font-semibold'>
            {currentPlanningDevelopments.length} Results
          </p>
        </div>
      </section>
    </div>
  )
}

// Mock data
const currentPlanningDevelopments = [
  {
    key: 1,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    city: 'Buena Park, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 2,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    city: 'Cerritos, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 3,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    city: 'Santa Ana, CA',
    role: 'Status',
    recentUpdate: '1/23/24',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 4,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    city: 'Irvine, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 5,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    city: 'La Mirada, CA',
    role: 'Status',
    recentUpdate: '1/23/24',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 6,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    city: 'Santa Ana, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 7,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    city: 'Irvine, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 8,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    city: 'La Mirada, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 9,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    city: 'Buena Park, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 10,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    city: 'Cerritos, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 11,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    city: 'La Mirada, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 12,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    city: 'Buena Park, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 13,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    city: 'Cerritos, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 14,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    city: 'Santa Ana, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 15,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    city: 'Irvine, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 16,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    city: 'La Mirada, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 17,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    city: 'Santa Ana, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 18,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    city: 'Irvine, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 19,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    city: 'La Mirada, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 20,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    city: 'Buena Park, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 21,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    city: 'Cerritos, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 22,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    city: 'La Mirada, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 23,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    city: 'Buena Park, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 24,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    city: 'Cerritos, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 25,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    city: 'Santa Ana, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 26,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    city: 'Irvine, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 27,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    city: 'La Mirada, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 28,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    city: 'Santa Ana, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 29,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    city: 'Irvine, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 30,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    city: 'La Mirada, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 31,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    city: 'Buena Park, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 32,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    city: 'Cerritos, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 33,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    city: 'La Mirada, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 34,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    city: 'Buena Park, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 35,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    city: 'Cerritos, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 36,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    city: 'Santa Ana, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 37,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    city: 'Irvine, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 38,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    city: 'La Mirada, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 39,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    city: 'Santa Ana, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 40,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    city: 'Irvine, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 41,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    city: 'La Mirada, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 42,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    city: 'Buena Park, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 43,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    city: 'Cerritos, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 44,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    city: 'La Mirada, CA',
    role: 'New',
    recentUpdate: '11/16/2023',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
