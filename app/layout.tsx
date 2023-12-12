
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

import Navbar from '@/components/Navbar'



export const metadata: Metadata = {
  title: 'magpieTours',
  description: 'Explore the beauty of nothern pakistan , valleys, mountains ,culture ,food and many more ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <Navbar/>
      <main className='relative overflow-hidden'>
         {children}
      </main>
      <Footer/>
        </body>
    </html>
  )
}
