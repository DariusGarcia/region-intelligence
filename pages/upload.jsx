import { useState, useEffect } from 'react'
import * as XLSX from 'xlsx'

export default function Home() {
  const [json, setJson] = useState(null)
  //   const [authenticated, setAuthenticated] = useState(false)

  const handleFileChange = async (event) => {
    const file = event.target.files[0]

    try {
      const jsonData = await excelToJson(file)
      setJson(jsonData)
    } catch (error) {
      console.error('Error reading Excel file:', error)
    }
  }

  const excelToJson = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })

        const headers = jsonData[0]
        const jsonDataWithKeys = jsonData.slice(1).map((row) => {
          const rowObject = {}
          headers.forEach((header, index) => {
            const camelCaseKey = convertToCamelCase(header)
            rowObject[camelCaseKey] = row[index]
          })
          return rowObject
        })

        resolve(jsonDataWithKeys)
      }

      reader.onerror = (e) => {
        reject(e)
      }

      reader.readAsArrayBuffer(file)
    })
  }

  const convertToCamelCase = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
  }

  const saveJSONToFile = () => {
    const data = JSON.stringify(json)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'output.json'

    link.click()

    // Clean up the URL object after the download
    setTimeout(() => {
      URL.revokeObjectURL(url)
    }, 0)
  }

  //   useEffect(() => {
  //     const password = prompt('Enter password:')
  //     if (password === '123') {
  //       setAuthenticated(true)
  //     } else {
  //       alert('Wrong password!')
  //     }
  //   }, [])

  //   if (!authenticated) {
  //     return null
  //   }

  return (
    <div className=' w-full items-center mt-12 md:mt-24 justify-center flex flex-col'>
      <div className='w-full max-w-7xl'>
        <div className=''>
          <section className='relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
            <svg
              className='mx-auto h-12 w-12 text-gray-400'
              stroke='currentColor'
              fill='none'
              viewBox='0 0 48 48'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6'
              />
            </svg>
            <span className='mt-2 mb-6  block text-sm font-semibold text-gray-900'>
              Upload excel spreadsheet
            </span>
            <div className='flex justify-center'>
              <input type='file' onChange={handleFileChange} className='w-56' />
              {json && (
                <div>
                  <button onClick={saveJSONToFile}>Save JSON to File</button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
