import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'
import Profile from '@/components/profile'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error logging out:', error.message)
  }
  return (
    <div className='flex w-full justify-center bg-white'>
      {!session ? (
        <div className='w-96 mt-24 bg-white'>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme='light'
          />
        </div>
      ) : (
        <div className='w-full mt-12  bg-white'>
          <Profile />
        </div>
      )}
    </div>
  )
}

export default Home
