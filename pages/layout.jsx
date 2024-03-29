import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Region Intelligence',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
