import { useState } from 'react'
import * as XLSX from 'xlsx'

import convertToCamelCase from '@/utils/convertToCamelCase'
import { createClient } from '@supabase/supabase-js'
import formatAddressForGeocoding from '@/utils/formatAddressForGeocoding'
import extractURL from '../../utils/extractURL'

export default function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
  const [json, setJson] = useState(null)
  const [loading, setLoading] = useState(false)
  const [permitCoord, setPermitCoord] = useState([])

  const handleFileChange = async (event) => {
    setLoading(true)
    const file = event.target.files[0]

    try {
      const jsonData = await excelToJson(file)
      setJson(jsonData)
      getCoordinates(jsonData)
    } catch (error) {
      console.error('Error reading Excel file:', error)
    } finally {
      setLoading(false)
    }
  }

  async function getCoordinates(permitData) {
    const permitDataWithGeolocation = await Promise.all(
      permitData.map(async (permit) => {
        const { projectLocations } = permit
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${formatAddressForGeocoding(
            projectLocations
          )},+${permit.city},+CA&key=${process.env.NEXT_PUBLIC_GEOCODE_API_KEY}`
        )

        const data = await response.json()
        const geolocation = data.results[0]?.geometry?.location

        return {
          ...permit,
          lat: geolocation?.lat,
          lng: geolocation?.lng,
        }
      })
    )
    setPermitCoord(permitDataWithGeolocation)
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

  const uploadDataToSupabase = async () => {
    setLoading(true)

    try {
      const insertData = permitCoord.map((row) => ({
        caseNumbers: row['caseNumbers'],
        projectStatus: row['projectStatus'],
        projectLocations: row['projectLocations'],
        projectDescriptions: row['projectDescriptions'],
        recentUpdate: row['recentUpdate'],
        listingNames: row['listingNames'],
        typeOfUse: row['typeOfUse'],
        applicant: row['applicant'],
        lat: row['lat'],
        lng: row['lng'],
        applicantPhone: row['applicantPhone'],
        applicantEmail: row['applicantEmail'],
        plannerName: row['plannerName'],
        imageUrls: extractURL(row['imageUrls']),
        city: row['city'],
        plannerPhone: row['plannerPhone'],
        plannerEmail: row['plannerEmail'],
      }))

      console.log({ insertData: insertData })
      const { error } = await supabase.from('cityProjects').insert(insertData)

      if (error) {
        throw new Error('Error uploading data to Supabase')
      } else {
        //   TODO: set alert to show data uploaded successfully
        console.log('Data uploaded to Supabase successfully')
      }
    } catch (error) {
      console.error('Error uploading data to Supabase:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <>Loading...</>
  }

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
              {/* SVG path */}
            </svg>
            <span className='mt-2 mb-6  block text-sm font-semibold text-gray-900'>
              Upload excel spreadsheet
            </span>
            <div className='flex flex-col justify-center items-center gap-6'>
              <input type='file' onChange={handleFileChange} className='w-56' />
              {json && (
                <div>
                  <button
                    disabled={loading ? true : false}
                    className={
                      loading
                        ? 'bg-blue-900 opacity-50 text-white rounded-md p-2'
                        : 'bg-blue-600 text-white rounded-md p-2 hover:bg-blue-500'
                    }
                    onClick={uploadDataToSupabase}
                  >
                    Upload to Supabase
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
