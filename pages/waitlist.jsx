import DefaultLayout from '@/components/layouts/defaultLayout'
import React from 'react'

export default function WaitlistPage() {
  return <div>waitlist</div>
}

WaitlistPage.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      <>{page}</>
    </DefaultLayout>
  )
}
