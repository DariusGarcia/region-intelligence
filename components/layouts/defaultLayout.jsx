// components/layouts/default.js

import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/navbar/footer'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout
