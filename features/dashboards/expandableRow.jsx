import React, { useState } from 'react'
import { Button, Carousel } from 'antd'
import Image from 'next/image'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import ExpandableRowOverview from './expandableRowOverview'
import ExpandableRowImages from './expandableRowImages'
import ExpandableRowSupplement from './expandableRowSupplement'
import ExpandableRowADUStandards from './expandableRowADUStandards'

export default function ExpandableRow({ record }) {
  return (
    <>
      <div className='flex flex-col md:grid md:grid-cols-2 justify-between gap-4 bg-white'>
        <ExpandableRowOverview record={record} />
        <ExpandableRowImages />

        <ExpandableRowSupplement record={record} />
        <ExpandableRowADUStandards record={record} />
      </div>
    </>
  )
}
