// components/layouts/default.js
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/navbar/footer'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
        <SpeedInsights />
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout
