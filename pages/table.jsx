import React, { useState, useEffect } from 'react'
import CollapsibleTable from '@/components/dataTables/ceqaDataTable'

const Table = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchCEQAData()
  }, [])

  async function fetchCEQAData() {
    const res = await fetch('/api/data/ceqa')
    if (!res.ok) {
      throw new Error(res.statusText)
    } else {
      const data = await res.json()
      setData(data)
      console.log(data)
    }
  }

  return (
    <div className='mt-12 mx-2'>
      <CollapsibleTable dataRows={data} />
    </div>
  )
}

export default Table
