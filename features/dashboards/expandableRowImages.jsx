import React, { useState } from 'react'
import { Button, Carousel } from 'antd'
import Image from 'next/image'

export default function ExpandableRowOverview() {
  const articlesContent = [
    {
      images: 'fasdfasdfa',
    },
  ]
  return (
    <div className='flex flex-col gap-4 border-2 border-gray-100 p-4 rounded-md shadow-sm '>
      <h1 className='text-lg font-bold'>Project Images</h1>
      <article className='w-[24rem]'>
        {articlesContent[0]?.images && (
          <Carousel dotPosition={'bottom'} autoplay>
            <div>
              <Image
                width={800}
                height={400}
                src='/landingHeader/home.jpg'
                className=''
              />
            </div>
            <div>
              <Image
                width={800}
                height={400}
                src='/landingHeader/home.jpg'
                className=''
              />
            </div>
            <div>
              <Image
                width={800}
                height={400}
                src='/landingHeader/home.jpg'
                className=''
              />
            </div>
            <div>
              <Image
                width={800}
                height={400}
                src='/landingHeader/home.jpg'
                className=''
              />
            </div>
          </Carousel>
        )}
      </article>
    </div>
  )
}
