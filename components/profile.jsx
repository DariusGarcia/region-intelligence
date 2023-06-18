import { useState, useEffect } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import RadioGroup from './radioGroup'
import BackgroundSelectMenu from './selectMenus/selectMenu'
import SuccessNotification from './notifications/successNotification'

export default function Profile() {
  const supabase = useSupabaseClient()
  const user = useUser()
  // TODO: condense this into one state object
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [first_name, setFirstName] = useState(null)
  const [last_name, setLastName] = useState(null)
  const [about_section, setAboutSection] = useState(null)
  const [street_address, setStreetAddress] = useState(null)
  const [city, setCity] = useState(null)
  const [state, setState] = useState(null)
  const [postal_code, setPostalCode] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const [background, setBackground] = useState(null)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

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
          setUsername(data.username)
          setFirstName(data.first_name)
          setLastName(data.last_name)
          setStreetAddress(data.street_address)
          setAboutSection(data.about_section)
          setCity(data.city)
          setState(data.state)
          setPostalCode(data.postal_code)
          setWebsite(data.website)
          setAvatarUrl(data.avatar_url)
          setBackground(data.background)
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
      last_name,
      street_address,
      city,
      state,
      postal_code,
      website,
      avatar_url,
      about_section,
      background,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) {
      alert(error.message)
    } else {
      setSuccess('Profile updated successfully')
    }
    setLoading(false)
  }

  // function handleBackgroundSelection(value) {
  //   setBackground(value?.name)
  // }

  return (
    <>
      {/* {loading && <p className='text-center'>Loading ...</p>} */}
      {
        <div className='flex justify-center px-4 md:px-0 bg-white'>
          {success && <SuccessNotification message={success} />}
          <form
            onSubmit={updateProfile}
            className='max-w-4xl flex flex-col justify-center'>
            <div className='space-y-12'>
              <div className='border-b border-gray-900/10 pb-12'>
                <h2 className='text-xl font-semibold leading-7 text-gray-900'>
                  Profile
                </h2>
                <p className='mt-1 text-sm leading-6 text-gray-600'>
                  This information will be displayed publicly so be careful what
                  you share.
                </p>

                <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  {/* <div className='col-span-full'>
                    <label
                      htmlFor='photo'
                      className='block text-sm font-medium leading-6 text-gray-900'>
                      Profile Picture
                    </label>
                    <div className='mt-2 flex items-center gap-x-3'>
                      <UserCircleIcon
                        className='h-12 w-12 text-gray-300'
                        aria-hidden='true'
                      />
                      <button
                        type='button'
                        className='rounded-md bg-white px-2.5 py-1.5 pl-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                        Change
                      </button>
                    </div>
                  </div> */}
                  <div className='sm:col-span-4'>
                    <label
                      htmlFor='username'
                      className='block text-sm font-medium leading-6 text-gray-900'>
                      Username
                    </label>
                    <div className='mt-2'>
                      <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md'>
                        <input
                          type='text'
                          name='username'
                          id='username'
                          value={username || ''}
                          onChange={(e) => setUsername(e.target.value)}
                          autoComplete='username'
                          className='block flex-1 border-0 bg-transparent py-1.5 pl-2  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                          placeholder='janesmith'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-span-full'>
                    <label
                      htmlFor='about'
                      className='block text-sm font-medium leading-6 text-gray-900'>
                      About
                    </label>
                    <p className='mt-3 text-sm leading-6 text-gray-600'>
                      Write a few sentences about yourself.
                    </p>
                    <div className='mt-2'>
                      <textarea
                        id='about'
                        name='about'
                        rows={3}
                        value={about_section || ''}
                        onChange={(e) => setAboutSection(e.target.value)}
                        className='block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>
                {/* Background select menu */}
                {/* <div className='mt-4'>
                  {' '}
                  <BackgroundSelectMenu
                    defaultValue={background}
                    onInputChange={handleBackgroundSelection}
                  />
                </div> */}
              </div>

              <div className='border-b border-gray-900/10 pb-12'>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>
                  Personal Information
                </h2>
                <p className='mt-1 text-sm leading-6 text-gray-600'>
                  This information is not shared publicly.
                </p>

                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
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
                        value={first_name || ''}
                        onChange={(e) => setFirstName(e.target.value)}
                        autoComplete='given-name'
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
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
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-4'>
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
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='country'
                      className='block text-sm font-medium leading-6 text-gray-900'>
                      Country
                    </label>
                    <div className='mt-2'>
                      <select
                        id='country'
                        name='country'
                        autoComplete='country-name'
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div className='col-span-full'>
                    <label
                      htmlFor='street-address'
                      className='block text-sm font-medium leading-6 text-gray-900'>
                      Street address
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='street-address'
                        id='street-address'
                        value={street_address || ''}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        autoComplete='street-address'
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2 sm:col-start-1'>
                    <label
                      htmlFor='city'
                      className='block text-sm font-medium leading-6 text-gray-900'>
                      City
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='city'
                        id='city'
                        value={city || ''}
                        onChange={(e) => setCity(e.target.value)}
                        autoComplete='address-level2'
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='region'
                      className='block text-sm font-medium leading-6 text-gray-900'>
                      State / Province
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='region'
                        id='region'
                        value={state || ''}
                        onChange={(e) => setState(e.target.value)}
                        autoComplete='address-level1'
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='postal-code'
                      className='block text-sm font-medium leading-6 text-gray-900'>
                      ZIP / Postal code
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='postal-code'
                        id='postal-code'
                        value={postal_code || ''}
                        onChange={(e) => setPostalCode(e.target.value)}
                        autoComplete='postal-code'
                        className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 flex items-center justify-end gap-x-6'>
              <button
                type='button'
                className='text-sm font-semibold leading-6 text-gray-900'>
                Cancel
              </button>
              <button
                type='submit'
                className='rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                Save
              </button>
            </div>
          </form>
        </div>
      }
    </>
  )
}
