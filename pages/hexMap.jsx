import React, { useState, useEffect } from 'react'
import HexMap from '../components/maps/hexMap'

const HexMapPage = () => {
  const [hexPoints, setHexPoints] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/scatterplot/manhattan.json'
      )

      if (res.ok) {
        const json = await res.json()
        setHexPoints(json)
      }
    }

    fetchData()
  }, [])

  console.log(hexPoints)
  return (
    <div className='w-[100vw] h-[80vh]'>
      <HexMap data={hexPoints} />
    </div>
  )
}

export default HexMapPage
