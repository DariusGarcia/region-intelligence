import React, { useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'

import Router from 'next/router'

export default function LoginPage() {
  const session = useSession()
  const supabase = useSupabaseClient()

  useEffect(() => {
    if (session) {
      Router.push('/users')
    }
  }, [session])

  async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error logging out:', error.message)
  }

  return (
    <div className='flex w-full justify-center bg-white'>
      {!session && (
        <div className='w-96 mt-24 bg-white px-4 md:px-0'>
          <h1 className='font-bold text-xl'>Sign In</h1>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme='light'
            providers={null}
          />
        </div>
      )}
    </div>
  )
}
