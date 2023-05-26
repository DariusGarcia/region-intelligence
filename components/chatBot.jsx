import React, { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function ChatBot() {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [showChatBot, setShowChatBot] = useState(false)
  const [user, setUser] = useState({})
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', session?.user?.id)

      setUser(data)

      const timeout = setTimeout(() => {
        setShowChatBot(true)
        setVisible(true)
      }, 30000) // Set the desired time in milliseconds

      return () => clearTimeout(timeout)
    }

    getUser()
  }, [session])

  return (
    <>
      {visible && showChatBot && (
        <div className='fixed cursor-default z-50 flex flex-col gap-2 bottom-0 right-0 mr-4 mb-4 rounded-md bg-blue-500 p-4 text-white'>
          <div className='flex flex-row justify-center w-full mb-2'>
            {' '}
            <p className='w-full'>AI ChatBot</p>
            <button
              className='w-max hover:opacity-50 transition ease-out'
              onClick={() => setVisible(!visible)}
            >
              Close
            </button>
          </div>
          <p>
            Hi {user ? user[0].username : 'user'}! How are you enjoying this
            website? <span className='blink'> ...</span>
          </p>
          {/* <form className='flex flex-row gap-2 justify-between'> */}
          <input
            type='text'
            className='rounded-md text-black '
            placeholder=' Im loving it!'
            onClick={() => ''}
          />
          {/* <button className='border border-white rounded-md p-2'>
              Enter
            </button> */}
          {/* </form> */}
        </div>
      )}
    </>
  )
}
