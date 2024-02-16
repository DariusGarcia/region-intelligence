import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/navbar/footer'
import Head from 'next/head'
import ChatBot from '@/features/chatBot'

export default function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Head>
        <title>Region Intelligence</title>
      </Head>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}>
        {getLayout(
          <>
            <ChatBot />
            <Component {...pageProps} />
          </>
        )}
      </SessionContextProvider>
    </>
  )
}
