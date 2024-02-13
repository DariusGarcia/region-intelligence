import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space, Pagination, Table, Button } from 'antd'

const pageSize = 5

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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'ID',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <p className='w-max'>{text}</p>,
    },
    {
      title: 'City',
      dataIndex: 'department',
      key: 'department',
      render: (text, record) => <p className='w-max'>{text}</p>,
    },
    {
      title: 'Status',
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
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button
          className='rounded-full text-xs'
          onClick={() => {
            setExpandedRowKey(expandedRowKey === record.key ? null : record.key) // Toggle expanded row key
          }}>
          View Details
        </Button> // Set the expanded row key on click
      ),
    },
    Table.EXPAND_COLUMN,
  ]

  return (
    <div className='md:px-4'>
      <div className='flex flex-row items-start mb-6 justify-between sm:items-center'>
        <div className='sm:flex-auto'>
          <p className='mt-2 text-sm text-gray-700 font-semibold'>
            230 Projects
          </p>
        </div>
        <div className=' sm:mt-0 sm:flex-none'>
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}>
            <a
              onClick={(e) => e.preventDefault()}
              className='md:block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer'>
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
          expandable={{
            expandedRowKeys: [expandedRowKey], // Pass the expanded row key
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.title}</p>
            ),
            onExpand: (expanded, record) => {
              if (!expanded) {
                setExpandedRowKey(null) // Reset expanded row key if collapse row
              }
            },
            rowExpandable: (record) => record.name !== 'Not Expandable',
            expandIcon: ({ expanded, onExpand, record }) =>
              expanded ? (
                <Button
                  className='hidden w-0'
                  onClick={(e) => onExpand(record, e)}></Button>
              ) : (
                <Button
                  className='hidden w-0'
                  onClick={(e) => onExpand(record, e)}></Button>
              ),
          }}
          pagination={false} // Disable default table pagination
        />
      </div>
      <section className='w-full flex mt-6 justify-center'>
        <Pagination
          current={currentPage}
          defaultCurrent={1}
          pageSize={pageSize}
          total={totalItems}
          onChange={handlePageChange}
        />
      </section>
    </div>
  )
}

const currentPlanningDevelopments = [
  {
    key: 1,
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 2,
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 3,
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'Status',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 4,
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 5,
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'Status',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 6,
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 7,
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 8,
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 9,
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 10,
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 11,
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 12,
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 13,
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 14,
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 15,
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 16,
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 17,
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 18,
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 19,
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 20,
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 21,
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 22,
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 23,
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 24,
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 25,
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 26,
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 27,
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 28,
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 29,
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 30,
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 31,
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 32,
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 33,
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 34,
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 35,
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 36,
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 37,
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 38,
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 39,
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 40,
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 41,
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 42,
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 43,
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    key: 44,
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

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
