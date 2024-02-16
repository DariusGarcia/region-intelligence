import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space, Pagination, Table, Button, Carousel } from 'antd'
import Image from 'next/image'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import ExpandableRow from './expandableRow'

const pageSize = 8

export default function CurrentPlanningDevelopmentsList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedRowKey, setExpandedRowKey] = useState(null)

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
      dataIndex: 'department',
      key: 'department',
      render: (text, record) => <p className='w-max'>{text}</p>,
    },
    {
      title: 'Recent Update',
      dataIndex: 'role',
      key: 'role',
      render: (text, record) => (
        <Space size='middle'>
          <p
            className={`inline-flex justify-center items-center rounded-full px-2 ${
              text === 'Status'
                ? 'bg-blue-50 text-blue-700 ring-blue-600/20' // Set the background color to blue if role is 'Status'
                : 'bg-orange-50 text-orange-700 ring-orange-600/20' // Otherwise, use the original color
            } md:w-24 w-16 text-center py-1 text-xs font-medium ring-1 ring-inset `}>
            {text}
          </p>
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

  // "view details" expanded row content
  const expandableRowRender = (record) => {
    return <ExpandableRow record={record} />
  }
  return (
    <div className='md:px-4 md:ml-4 rounded-md md:border-2 border-gray-50 pt-4'>
      <div className='flex flex-row items-start mb-6 justify-between sm:items-center'>
        <div className=' sm:mt-0 sm:flex-none'>
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}>
            <a
              onClick={(e) => e.preventDefault()}
              className='md:block rounded-md  px-3 py-2 text-center text-sm border-[1px] text-gray-400 hover:bg-gray-100 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer'>
              <Space>
                Filter Projects <DownOutlined />
              </Space>
            </a>
          </Dropdown>
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
      <section className='w-full flex flex-col md:flex-row gap-8 md:gap-0 mt-6 justify-between pb-8'>
        <Pagination
          current={currentPage}
          defaultCurrent={1}
          pageSize={pageSize}
          total={totalItems}
          onChange={handlePageChange}
        />
        <div className='md:mr-8 flex m-auto md:m-0 md:block'>
          <p className='mt-2 text-sm text-gray-500 font-semibold'>
            230 Results
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
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 2,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 3,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    department: 'Santa Ana, CA',
    role: 'Status',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 4,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 5,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    department: 'La Mirada, CA',
    role: 'Status',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 6,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 7,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 8,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 9,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 10,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 11,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 12,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 13,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 14,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 15,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 16,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 17,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 18,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 19,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 20,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 21,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 22,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 23,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 24,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 25,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 26,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 27,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 28,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 29,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 30,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 31,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 32,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 33,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 34,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 35,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 36,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 37,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 38,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 39,
    name: '2342342',
    title: 'CU-37-1',
    applicant: 'Tom Anderson',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 40,
    name: '1242354',
    title: 'CU-22-1',
    applicant: 'Tom Anderson',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 41,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 42,
    name: '8675309',
    title: 'CU-27-1',
    applicant: 'Tom Anderson',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 43,
    name: '3534534',
    title: 'CU-17-1',
    applicant: 'Tom Anderson',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 44,
    name: '9078975',
    title: 'CU-24-1',
    applicant: 'Tom Anderson',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

// Filter Projects dropdown menu items
const items = [
  {
    key: '0',
    label: <a href='#'>1st menu item</a>,
  },
  {
    key: '1',
    label: <a href='#'>2nd menu item</a>,
  },
  {
    key: '3',
    type: 'divider',
  },
  {
    label: '3rd menu item',
  },
]