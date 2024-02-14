import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space, Pagination, Table, Button, Carousel } from 'antd'
import Image from 'next/image'

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
          {expandedRowKey === record.key ? 'Close' : 'View Details'}
        </Button> // Set the expanded row key on click
      ),
    },
    Table.EXPAND_COLUMN,
  ]

  // "view details" expanded row content
  const expandableRowRender = (record) => {
    const articlesContent = [
      {
        buttons: [
          { key: 1, text: 'Overview' },
          { key: 2, text: 'Land & Property' },
          { key: 3, text: 'Regulations' },
          { key: 4, text: 'Full Report' },
        ],
      },
      {
        gridContent: [
          { key: 5, label: 'City Name', value: 'Buena Park' },
          { key: 6, label: 'Applicant', value: 'John Doe' },
          { key: 7, label: 'State', value: 'California' },
          { key: 8, label: 'APN(s)', value: '8675309' },
          { key: 9, label: 'Location', value: '9047 The Wave' },
          { key: 10, label: 'Permit', value: record.title },
          {
            key: 11,
            label: 'Description',
            value:
              'The applicant wants to build an ADU on an existing 1800 sqft lot.',
          },
        ],
      },
      {
        images: 'fasdfasdfa',
      },
    ]

    return (
      <section className='h-full flex flex-col md:flex-row justify-between items-start'>
        {articlesContent.map((content, index) => (
          <>
            <article
              key={index}
              className='flex flex-col gap-4  justify-center rounded-xl'>
              <div className='flex flex-col gap-0 bg-gray-100 rounded-xl w-full px-2 '>
                {content.buttons &&
                  content.buttons.map((button) => (
                    <Button
                      key={button.key}
                      className='flex items-center text-center justify-center p-2 my-4 rounded-xl bg-white'>
                      {button.text}
                    </Button>
                  ))}
              </div>
            </article>
            <article className=''>
              <>
                {content.gridContent && (
                  <div
                    className={`grid grid-cols-1 md:grid-cols-3 gap-4  ${
                      content.gridContent.length === 1
                        ? 'grid-cols-1'
                        : 'grid-cols-1 md:grid-cols-3 '
                    } bg-gray-100 p-2  justify-center rounded-xl`}>
                    {content.gridContent.map((item, index) => (
                      <div
                        key={item.key}
                        className={`flex flex-col shadow-md bg-white p-2 rounded-xl ${
                          content.gridContent.length === 1 &&
                          index === content.gridContent.length - 1
                            ? 'col-span-full'
                            : ''
                        }`}>
                        <p className='font-semibold italic text-sm'>
                          {item.label}
                        </p>
                        <p>{item.value}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            </article>
            <article className='w-56'>
              {/* Image carousel */}
              {content.images && (
                <Carousel dotPosition={'top'} autoplay>
                  <div>
                    <Image
                      width={400}
                      height={400}
                      src='/about/about-us-image.png'
                      className=''></Image>
                  </div>
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src='/productsHeader.png'
                      className=''></Image>
                  </div>
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src='/productsHeader.png'
                      className=''></Image>
                  </div>
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src='/productsHeader.png'
                      className=''></Image>
                  </div>
                </Carousel>
              )}
            </article>
          </>
        ))}
      </section>
    )
  }
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

// Mock data
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
