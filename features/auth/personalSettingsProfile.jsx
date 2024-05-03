import { useState, useEffect } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import SuccessNotification from '../../components/notifications/successNotification'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Avatar from '@/components/avatar'
import { Button, message } from 'antd'
import validatePhoneNumber from '@/utils/validatePhoneNumber'
import { Tabs } from 'antd'

export default function PersonalSettingsProfile() {
  const supabase = useSupabaseClient()
  const user = useUser()
  // TODO: condense this into one state object
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(null)
  const [username, setUsername] = useState(null)
  const [first_name, setFirstName] = useState(null)
  const [last_name, setLastName] = useState(null)
  const [phone_number, setPhone_number] = useState(null)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('1')
  const [avatar_url, setAvatarUrl] = useState(null)
  const [messageApi, contextHolder] = message.useMessage()

  const displaySuccess = () => {
    messageApi.open({
      type: 'success',
      content: 'Profile updated successfully',
    })
  }

  const displayError = () => {
    messageApi.open({
      type: 'error',
      content: error,
    })
  }

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()

        if (error) {
          setError(error.message)
          console.warn(error)
        } else if (data) {
          setData(data)
          //   setUsername(data.username)
          setFirstName(data.first_name)
          setLastName(data.last_name)
          setPhone_number(data.phone_number)
          setAvatarUrl(data.avatar_url)
        }

        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    // Only run query once user is logged in.
    if (user) loadData()
  }, [user])

  async function updateProfile(e) {
    e.preventDefault()
    if (!user) return
    setLoading(true)

    const updates = {
      id: user.id,
      username,
      first_name,
      phone_number,
      last_name,
      // avatar_url,
      updated_at: new Date(),
    }

    // Validate phone number
    if (!validatePhoneNumber(phone_number)) {
      setError('Invalid phone number')
      displayError()
      setLoading(false)
      return
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) {
      alert(error.message)
      displayError()
    } else {
      displaySuccess()
    }
    setLoading(false)
  }

  const handleTabChange = (key) => {
    setActiveTab(key)
  }

  const items = [
    {
      key: '1',
      label: 'Profile',
      children: (
        <div className='mt-10 flex flex-col md:grid gap-x-6 gap-y-8 md:grid-cols-6'>
          <div className='sm:col-span-3'>
            <label
              htmlFor='first-name'
              className='block text-sm font-medium leading-6 text-gray-900'>
              First name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='first-name'
                id='first-name'
                autoComplete='given-name'
                value={first_name || ''}
                onChange={(e) => setFirstName(e.target.value)}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='last-name'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Last name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='last-name'
                id='last-name'
                value={last_name || ''}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete='family-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                disabled={true}
                value={user?.email}
                autoComplete='email'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='phone'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Phone Number
            </label>
            <div className='mt-2'>
              <input
                id='phone'
                name='phone'
                type='phone'
                value={phone_number || ''}
                onChange={(e) => setPhone_number(e.target.value)}
                autoComplete='phone'
                className='block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='col-span-full'>
            {/* Content for the Avatar component */}
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='last-name'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Last name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='last-name'
                id='last-name'
                value={last_name || ''}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete='family-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                disabled={true}
                value={user?.email}
                autoComplete='email'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label
              htmlFor='phone'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Phone Number
            </label>
            <div className='mt-2'>
              <input
                id='phone'
                name='phone'
                type='phone'
                value={phone_number || ''}
                onChange={(e) => setPhone_number(e.target.value)}
                autoComplete='phone'
                className='block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      key: '2',
      label: 'Notifications',
      children: (
        <div className='border-b border-gray-900/10 pb-12 px-2 md:px-0'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Notifications
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>

          <div className='mt-10 space-y-10'>
            <fieldset>
              <legend className='text-sm font-semibold leading-6 text-gray-900'>
                By Email
              </legend>
              <div className='mt-6 space-y-6'>
                <div className='relative flex gap-x-3'>
                  <div className='flex h-6 items-center'>
                    <input
                      id='comments'
                      name='comments'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600'
                    />
                  </div>
                  <div className='text-sm leading-6'>
                    <label
                      htmlFor='comments'
                      className='font-medium text-gray-900'>
                      Updates
                    </label>
                    <p className='text-gray-500'>
                      Get notified when a new project is published.
                    </p>
                  </div>
                </div>

                <div className='relative flex gap-x-3'>
                  <div className='flex h-6 items-center'>
                    <input
                      id='offers'
                      name='offers'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600'
                    />
                  </div>
                  <div className='text-sm leading-6'>
                    <label
                      htmlFor='offers'
                      className='font-medium text-gray-900'>
                      Marketing Offers
                    </label>
                    <p className='text-gray-500'>
                      Get notified when about marketing offers.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className='text-sm font-semibold leading-6 text-gray-900'>
                Push Notifications
              </legend>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                These are delivered via SMS to your mobile phone.
              </p>
              <div className='mt-6 space-y-6'>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='push-everything'
                    name='push-notifications'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600'
                  />
                  <label
                    htmlFor='push-everything'
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    Everything
                  </label>
                </div>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='push-email'
                    name='push-notifications'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600'
                  />
                  <label
                    htmlFor='push-email'
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    Same as email
                  </label>
                </div>
                <div className='flex items-center gap-x-3'>
                  <input
                    id='push-nothing'
                    name='push-notifications'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600'
                  />
                  <label
                    htmlFor='push-nothing'
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      ),
    },
    {
      key: '3',
      label: 'Account',
      children: 'Account',
    },
    {
      key: '4',
      label: 'Security',
      children: 'Security',
    },
  ]

  return (
    <form onSubmit={updateProfile} className='max-w-7xl mb-12'>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12 px-2 md:px-0'>
          <h2 className='text-xl font-bold leading-7 text-gray-900'>
            Personal Settings
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Enter your profile information
          </p>
          <section className='bg-white p-4 rounded-sm mt-6 shadow'>
            <Tabs
              defaultActiveKey='1'
              items={items}
              onChange={handleTabChange}
              activeKey={activeTab}
            />
            {/* Profile Modal */}
            <Tabs.TabPane tab='Profile' key='1'></Tabs.TabPane>
            {/* Notifications modal */}
            <Tabs.TabPane tab='Notifications' key='2'></Tabs.TabPane>
          </section>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        {contextHolder}
        <Button
          type='button'
          className='text-sm font-semibold leading-6 text-gray-900 '>
          <Link href='/dashboard'>Cancel</Link>
        </Button>
        <Button
          type='submit'
          onClick={updateProfile}
          className='bg-blue-600 text-white w-36 hover:bg-blue-500'>
          Save
        </Button>
      </div>
    </form>
  )
}
