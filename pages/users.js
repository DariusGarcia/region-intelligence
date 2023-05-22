import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className='flex w-full justify-center'>
      <div className='w-96 mt-24'>
        {!session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme='dark'
          />
        ) : (
          <p>Account page will go here.</p>
        )}
      </div>
    </div>
  )
}

export default Home
