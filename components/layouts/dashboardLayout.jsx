// components/layouts/default.js

import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/navbar/footer'

const DashboardLayout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default DashboardLayout
