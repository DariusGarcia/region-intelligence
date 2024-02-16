import React, { useState } from 'react'
import { Button, Carousel } from 'antd'
import Image from 'next/image'
import { PaperClipIcon, PlusIcon } from '@heroicons/react/20/solid'
import ExpandableRowOverview from './expandableRowOverview'
import ExpandableRowImages from './expandableRowImages'
import ExpandableRowSupplement from './expandableRowSupplement'
import ExpandableRowADUStandards from './expandableRowADUStandards'
import {
  BookmarkAdd,
  BookmarkAddSharp,
  BookmarkAdded,
  BookmarkBorderOutlined,
  SaveAltSharp,
  SaveAltTwoTone,
  SaveAs,
  SaveRounded,
} from '@mui/icons-material'
import { HiSave } from 'react-icons/hi'

export default function ExpandableRow({ record }) {
  return (
    <>
      <div className=''>
        <div className='flex flex-row justify-between'>
          <h2 className='text-blue-600 font-semibold border-b-2 border-blue-600 w-min'>
            Overview
          </h2>
          <div className='flex flex-row gap-4 items-center mb-2'>
            <Button>
              <BookmarkBorderOutlined className='text-blue-600 ' size={30} />
            </Button>
            <Button
              type='secondary'
              className='text-white bg-blue-600 hover:bg-blue-700 rounded-sm flex items-center'>
              <PlusIcon className='w-8 text-white' /> Add Report
            </Button>
          </div>
        </div>
        <section className='flex flex-col md:grid md:grid-cols-2 justify-between gap-4 bg-white'>
          <ExpandableRowOverview record={record} />
          <ExpandableRowImages />
          <ExpandableRowSupplement record={record} />
          <ExpandableRowADUStandards record={record} />
        </section>
      </div>
    </>
  )
}
