export default function DBDataTable({ tables }) {
  const tableData = Object.values(tables.slice(0, 10))

  if (tableData.length === 0) {
    return <p>No data available</p>
  }

  const columnNames = Object.keys(tableData[0])

  return (
    <div className='px-4 sm:px-6 lg:px-8 bg-gray-200 text-black rounded-md py-4 '>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-base font-semibold leading-6 '>
            City Projects Data Table
          </h1>
          <p className='mt-2 text-sm'>
            A list of all the pending city permits in Orange County.
          </p>
        </div>
        <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
          {/* <button
            type='button'
            className='block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          >
            Edit
          </button> */}
        </div>
      </div>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <table className='min-w-full divide-y divide-gray-300  text-black'>
              <thead>
                <tr>
                  {columnNames.map((columnName) => (
                    <th
                      key={columnName}
                      scope='col'
                      className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-3'
                    >
                      {columnName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className=' text-black'>
                {tableData &&
                  tableData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? ' ' : 'even:bg-gray-50'}
                    >
                      {columnNames.map((columnName) => (
                        <td
                          key={columnName}
                          className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-3 '
                        >
                          {row[columnName]?.toString()?.slice(0, 25)}
                        </td>
                      ))}
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
