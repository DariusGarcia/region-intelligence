import React, { useState } from 'react'
import { Button, Carousel } from 'antd'
import Image from 'next/image'

export default function ExpandableRow({ record }) {
  const [selectedButton, setSelectedButton] = useState(null)

  const articlesContent = [
    {
      buttons: [
        { key: 1, text: 'Overview' },
        { key: 2, text: 'Land & Property' },
        { key: 3, text: 'Regulations' },
        { key: 4, text: 'Full Report' },
      ],
    },
    {
      overviewGridContent: [
        { key: 5, label: 'City Name', value: 'Buena Park' },
        { key: 6, label: 'Applicant', value: 'John Doe' },
        { key: 7, label: 'State', value: 'California' },
        { key: 8, label: 'APN(s)', value: '8675309' },
        { key: 9, label: 'Location', value: '9047 The Wave' },
        { key: 10, label: 'Permit', value: record.title },
        {
          key: 11,
          label: 'Description',
          value:
            'The applicant wants to build an ADU on an existing 1800 sqft lot.',
        },
      ],
    },
    {
      landAndPropertyGridContent: [
        { key: 12, label: 'Property Owner', value: 'TLM Holdings' },
        { key: 13, label: 'Approved By', value: 'Joe Doe' },
        {
          key: 14,
          label: 'General Plan Use',
          value: 'Single Family Residential',
        },
        {
          key: 15,
          label: 'Current Zoning',
          value: 'One-Family Residential (RS-6)',
        },
        { key: 16, label: 'Lot Size', value: '1.2 ccres' },
        { key: 17, label: 'Frontage', value: '70 Feet' },
      ],
    },
    {
      images: 'fasdfasdfa',
    },
  ]

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey)
  }

  const OverviewComponent = ({ content }) => {
    return (
      <article className='my-2 md:my-0'>
        {content.overviewGridContent && (
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-4  ${
              content.overviewGridContent.length === 1
                ? 'grid-cols-1'
                : 'grid-cols-1 md:grid-cols-3 '
            } bg-gray-100 p-2  justify-center rounded-xl`}>
            {content.overviewGridContent.map((item, index) => (
              <div
                key={item.key}
                className={`flex flex-col shadow-md bg-white p-2 rounded-xl ${
                  content.overviewGridContent.length === 1 &&
                  index === content.overviewGridContent.length - 1
                    ? 'col-span-full'
                    : ''
                }`}>
                <p className='font-semibold italic text-sm'>{item.label}</p>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        )}
      </article>
    )
  }

  const LandAndPropertyComponent = ({ content }) => {
    return (
      <article className='my-2 md:my-0'>
        {content.landAndPropertyGridContent && (
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-4  ${
              content.landAndPropertyGridContent.length === 1
                ? 'grid-cols-1'
                : 'grid-cols-1 md:grid-cols-3 '
            } bg-gray-100 p-2  justify-center rounded-xl`}>
            {content.landAndPropertyGridContent.map((item, index) => (
              <div
                key={item.key}
                className={`flex flex-col shadow-md bg-white p-2 rounded-xl ${
                  content.landAndPropertyGridContent.length === 1 &&
                  index === content.landAndPropertyGridContent.length - 1
                    ? 'col-span-full'
                    : ''
                }`}>
                <p className='font-semibold italic text-sm'>{item.label}</p>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        )}
      </article>
    )
  }

  return (
    <section className='h-full flex flex-col md:flex-row justify-between items-start'>
      {articlesContent.map((content, index) => (
        <React.Fragment key={index}>
          {content.buttons && (
            <article className='flex flex-col gap-4 justify-center rounded-xl'>
              <div className='grid grid-cols-2 gap-2 md:flex md:flex-col md:gap-0 bg-gray-100 rounded-xl w-full px-2'>
                {content.buttons.map((button) => (
                  <Button
                    key={button.key}
                    onClick={() => handleButtonClick(button.key)}
                    className='flex items-center text-center justify-center p-2 my-4 rounded-xl bg-white shadow-md'>
                    {button.text}
                  </Button>
                ))}
              </div>
            </article>
          )}
          {/* Render overview content if selected */}
          {selectedButton === 1 && content.overviewGridContent && (
            <OverviewComponent content={content} />
          )}
          {/* Render land & property content if selected */}
          {selectedButton === 2 && content.landAndPropertyGridContent && (
            <LandAndPropertyComponent content={content} />
          )}
          <article className='w-56'>
            {content.images && (
              <Carousel dotPosition={'top'} autoplay>
                <div>
                  <Image
                    width={400}
                    height={400}
                    src='/about/about-us-image.png'
                    className=''
                  />
                </div>
                <div>
                  <Image
                    width={200}
                    height={200}
                    src='/productsHeader.png'
                    className=''
                  />
                </div>
                <div>
                  <Image
                    width={200}
                    height={200}
                    src='/productsHeader.png'
                    className=''
                  />
                </div>
                <div>
                  <Image
                    width={200}
                    height={200}
                    src='/productsHeader.png'
                    className=''
                  />
                </div>
              </Carousel>
            )}
          </article>
        </React.Fragment>
      ))}
    </section>
  )
}
