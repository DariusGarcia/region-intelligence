import React, { useState } from 'react'
import { Radio } from 'antd'
import { CheckIcon, DocumentPlusIcon } from '@heroicons/react/20/solid'
import {
  IoIosCheckmarkCircleOutline,
  IoMdCheckmarkCircle,
} from 'react-icons/io'
import { ThreeDRotation, ThreeGMobiledataTwoTone } from '@mui/icons-material'
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline'

export default function ExpandableRowADUStandards({ record }) {
  const [value, setValue] = useState(1)

  // Define titles for each radio group
  const radioTitles = {
    1: 'Buena Park ADU Standards Check',
    2: 'Hazards',
    3: 'Area Analysis',
    4: 'Environmental Analysis',
  }

  // Define content for each radio option
  const contentMap = {
    1: (
      <>
        {/* Content for radio option 1 */}
        <div className='flex flex-col gap-12'>
          {ADUStandards.map((item) => (
            <div key={item.id} className='flex items-center gap-2'>
              <span
                className={`w-10 h-10 text-black p-2 flex items-center justify-center rounded-lg ${
                  item.icon === EllipsisHorizontalCircleIcon
                    ? 'bg-red-300'
                    : 'bg-green-300'
                }`}>
                <item.icon className='w-6 h-6' />
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </>
    ),
    2: (
      <>
        {/* Content for radio option 2 */}
        <div className='flex flex-col gap-12 max-h-[300px] md:w-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
          {hazards.map((item) => (
            <div key={item.id} className='flex items-center gap-2'>
              <span
                className={`w-10 h-10 text-black p-2 flex items-center justify-center rounded-lg ${
                  item.icon === EllipsisHorizontalCircleIcon
                    ? 'bg-red-300'
                    : 'bg-green-300'
                }`}>
                <item.icon className='w-6 h-6' />
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </>
    ),
    3: (
      <>
        {/* Content for radio option 3 */}
        <div className='flex flex-col gap-12 max-h-[300px] md:w-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
          {areaAnalysis.map((item) => (
            <div key={item.id} className='flex items-center gap-2'>
              <span
                className={`w-10 h-10 text-black p-2 flex items-center justify-center rounded-lg ${
                  item.icon === EllipsisHorizontalCircleIcon
                    ? 'bg-red-300'
                    : 'bg-green-300'
                }`}>
                <item.icon className='w-6 h-6' />
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </>
    ),
    4: (
      <>
        {/* Content for radio option 3 */}
        <div className='flex flex-col gap-12'>
          {environmentalAnalysis.map((item) => (
            <div key={item.id} className='flex items-center gap-2'>
              <span
                className={`w-10 h-10 text-black p-2 flex items-center justify-center rounded-lg ${
                  item.icon === EllipsisHorizontalCircleIcon
                    ? 'bg-red-300'
                    : 'bg-green-300'
                }`}>
                <item.icon className='w-6 h-6' />
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </>
    ),
  }

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className='border-2 border-gray-100 p-4 rounded-md h-full'>
      <h1 className='font-bold text-lg mb-4'>{radioTitles[value]}</h1>
      <div className='mt-0'>
        <dl className='grid grid-cols-1 sm:grid-cols-2'>
          {/* Map over the array and render each item */}
          {contentMap[value]}
        </dl>
      </div>
      <div className='flex md:justify-center mt-8 '>
        <Radio.Group
          onChange={onChange}
          value={value}
          className='flex flex-row gap-2'>
          <Radio value={1}></Radio>
          <Radio value={2}></Radio>
          <Radio value={3}></Radio>
          <Radio value={4}></Radio>
        </Radio.Group>
      </div>
    </div>
  )
}

const ADUStandards = [
  {
    title: 'Buena Park ADU Standards Check',
    id: 1,
    text: 'Meets Lot Coverage Requirement',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 2,
    text: 'Meets Rear Yard Coverage Requirement',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 3,
    text: 'Does Not Meet Setback Requirements',
    icon: EllipsisHorizontalCircleIcon,
  },
  {
    id: 4,
    text: 'Does Not Meet Parking Requirements',
    icon: EllipsisHorizontalCircleIcon,
  },
  {
    id: 5,
    text: 'Meets Front Yard Landscape Requirements',
    icon: IoIosCheckmarkCircleOutline,
  },
]
const hazards = [
  {
    id: 1,
    text: 'This Parcel is built on an earthquake fault line.',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 2,
    text: 'Flooding Risk in a 2 - Meter Sea Rise',
    icon: EllipsisHorizontalCircleIcon,
  },
  {
    id: 3,
    text: 'Fire Hazard Parcel',
    icon: EllipsisHorizontalCircleIcon,
  },
  {
    id: 4,
    text: 'Flooding Risk in a 1 - Meter Sea Rise',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 5,
    text: 'Liquefaction Zone Parcel',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 6,
    text: 'Flooding Risk in a 1 - Meter Sea Rise',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 7,
    text: 'Liquefaction Zone Parcel',
    icon: EllipsisHorizontalCircleIcon,
  },
  {
    id: 8,
    text: 'Land Slide Hazard Parcel',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 9,
    text: 'Flooding Hazard',
    icon: IoIosCheckmarkCircleOutline,
  },
]
const areaAnalysis = [
  {
    title: 'Grocery Within 1 Mile Radius',
    id: 1,
    text: 'Meets Lot Coverage Requirement',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 2,
    text: 'Healthcare Within 1 Mile Radius',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 3,
    text: 'Open Space Within 1 Mile Radius',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 4,
    text: 'High Quality Transit Area',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 5,
    text: 'Economic Opportunity Level',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 6,
    text: 'Located Within a Job Center',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 7,
    text: 'Absolute Constrain Area',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 8,
    text: 'Variable Constraint Area',
    icon: EllipsisHorizontalCircleIcon,
  },
  {
    id: 9,
    text: 'Disadvantaged Community Area',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 10,
    text: 'Community of Concern Area',
    icon: IoIosCheckmarkCircleOutline,
  },
]

const environmentalAnalysis = [
  {
    title: 'Buena Park ADU Standards Check',
    id: 1,
    text: 'Meets Lot Coverage Requirement',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 2,
    text: 'Meets Rear Yard Coverage Requirement',
    icon: IoIosCheckmarkCircleOutline,
  },
  {
    id: 3,
    text: 'Does Not Meet Setback Requirements',
    icon: EllipsisHorizontalCircleIcon,
  },
  {
    id: 4,
    text: 'Does Not Meet Parking Requirements',
    icon: EllipsisHorizontalCircleIcon,
  },
  {
    id: 5,
    text: 'Meets Front Yard Landscape Requirements',
    icon: IoIosCheckmarkCircleOutline,
  },
]

// Define an array of objects similar to overviewGridContent
const overviewGridContent = [
  {
    key: 5,
    label: 'Current Zoning',
    value: 'RS - 6 Residential',
  },
  { key: 6, label: 'CEQA Analysis', value: 'Categorically Exempt' },
  { key: 8, label: 'General Plan Use', value: 'Residential' },
  { key: 9, label: 'Approval Sentiment', value: 'Likely to Pass' },
  {
    key: 11,
    label: 'General Discussion',
    value:
      'The staff reviewed plans and visited the property and is of the opinion that the facility and site are adequate to support the accessory dwelling unit',
  },
]
