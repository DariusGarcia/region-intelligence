import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'

const items = [
  {
    label: <a href='https://www.antgroup.com'>1st menu item</a>,
    key: '0',
  },
  {
    label: <a href='https://www.aliyun.com'>2nd menu item</a>,
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

export default function CurrentPlanningDevelopmentsList() {
  return (
    <div className='px-4'>
      <div className='flex flex-row items-start justify-between sm:items-center'>
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
              className='md:block rounded-md bg-blue`-600 px-3 py-2 text-center text-sm font-semibold text-black hover:bg-blue`-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue`-600 cursor-pointer'>
              <Space>
                Filter Projects
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <div className='flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <table className='min-w-full divide-y divide-gray-300'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'>
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                    ID
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                    City
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                    Status
                  </th>
                  <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-0'>
                    <span className='sr-only'>View</span>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {currentPlanningDevelopments.map((person) => (
                  <tr key={person.email}>
                    <td className='whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'>
                      <div className='flex items-center'>
                        <div className=''>
                          <div className='font-medium text-gray-900'>
                            {person.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                      <div className='text-gray-900'>{person.title}</div>
                      <div className='mt-1 text-black'>
                        {person.department} hi
                      </div>
                    </td>{' '}
                    <td className='whitespace-nowrap px-3 py-5 text-xs text-black'>
                      {person.role}{' '}
                      <p className='text-gray-500'>Recent Update: 11/18/2023</p>
                    </td>
                    <td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                      <span className='inline-flex items-center rounded-full bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20'>
                        New
                      </span>
                    </td>
                    <td className='relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-xs font-medium sm:pr-0'>
                      <a
                        href='#'
                        className='p-2 border-2 border-black rounded-full transition ease-out hover:opacity-70'>
                        View Details
                        <span className='sr-only'>, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

const currentPlanningDevelopments = [
  {
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    role: 'Buena Park, CA',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    role: 'Buena Park, CA',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    role: 'Buena Park, CA',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    role: 'Buena Park, CA',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    role: 'Buena Park, CA',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'APN(s): 8675309',
    title: 'CU-27-1',
    role: 'Buena Park, CA',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
