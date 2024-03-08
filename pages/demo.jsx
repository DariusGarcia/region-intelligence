import DemoVideo from '@/components/demo/demo'
import React from 'react'

export default function Demo() {
  return (
    <div className='md:mt-12 justify-center'>
      <h1 className='text-2xl font-bold text-center'>
        Here is a video walkthrough of how to use the map.
      </h1>
      <DemoVideo />
    </div>
  )
}
