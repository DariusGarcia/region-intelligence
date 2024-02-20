// components/layouts/default.js
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/navbar/footer'

const DashboardLayout = ({ children }) => {
  return (
    <>
      <main>
        {children}
        <SpeedInsights />
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default DashboardLayout
