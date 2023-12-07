import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './NavBar/NavBar'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Solanaball',
  description: 'Venha se divertir no solanaball',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
          <main className='p-4 max-w-7xl m-auto min-w-[300px]'>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
