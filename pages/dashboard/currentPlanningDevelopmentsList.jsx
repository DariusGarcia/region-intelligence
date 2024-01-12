import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space, Pagination, Table, Button } from 'antd'

const pageSize = 5

export default function CurrentPlanningDevelopmentsList() {
  const [currentPage, setCurrentPage] = React.useState(1)

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

  return (
    <div className='px-4'>
      <div className='flex flex-row items-start mb-6 justify-between sm:items-center'>
        <div className='sm:flex-auto'>
          <p className='mt-2 text-sm text-gray-700 font-semibold'>
            230 Projects
          </p>
        </div>
        <div className='sm:ml-16 sm:mt-0 sm:flex-none'>
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
      <Table
        dataSource={currentItems}
        columns={columns}
        pagination={false} // Disable default table pagination
      />
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
  },
  {
    title: 'City',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Status',
    dataIndex: 'role',
    key: 'role',
    render: (text, record) => (
      <Space size='middle'>
        <p className='inline-flex justify-center items-center rounded-full bg-orange-50 px-2 md:w-24 w-12 text-center py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20'>
          {text}
        </p>
      </Space>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Button className='rounded-full'>View Details</Button>
    ),
  },
]

const currentPlanningDevelopments = [
  {
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 2342342',
    title: 'CU-37-1',
    department: 'Santa Ana, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 1242354',
    title: 'CU-22-1',
    department: 'Irvine, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 9078975',
    title: 'CU-24-1',
    department: 'La Mirada, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    department: 'Buena Park, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 3534534',
    title: 'CU-17-1',
    department: 'Cerritos, CA',
    role: 'New',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
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
    label: <a href='#'>1st menu item</a>,
    key: '0',
  },
  {
    label: <a href='#'>2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
]
