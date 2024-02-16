import React, { useState } from 'react'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Menu, Checkbox, Button } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { FaCity } from 'react-icons/fa'
import { CalendarIcon } from '@heroicons/react/20/solid'
import { CalendarMonth, CalendarViewDay } from '@mui/icons-material'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'

export default function FilterMenu({ projects }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCities, setSelectedCities] = useState([])

  const onClick = (e) => {
    console.log('click', e)
  }
  // Convert projects array into a set of unique cities
  const uniqueCities = Array.from(
    new Set(projects.map((project) => project.city))
  )

  const items = [
    getItem(
      'Cities',
      'sub1',
      <FaCity />,
      projects && uniqueCities?.map((city) => getItem(city))
    ),
    getItem('Project Type', 'sub2', <AppstoreOutlined />, [
      getItem('Residential', '5'),
      getItem('Commercial', '6'),
      getItem('Rezoning', '7'),
    ]),
    getItem('Date', 'sub4', <CalendarMonth />, [
      getItem('Ascending', '9'),
      getItem('Descending', '10'),
    ]),
  ]

  return (
    <>
      <Button
        className='flex flex-row items-center'
        onClick={() => setIsOpen(!isOpen)}>
        Filter {isOpen ? <UpOutlined size={30} /> : <DownOutlined />}
      </Button>
      {isOpen && (
        <Menu
          onClick={onClick}
          style={{
            width: 256,
          }}
          className='mt-2  border-2 shadow-lg rounded-md absolute z-50'
          mode='vertical'
          items={items}
        />
      )}
    </>
  )
}

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

// Add function to handle click event
const onClick = (e) => {
  console.log('click', e)
}
