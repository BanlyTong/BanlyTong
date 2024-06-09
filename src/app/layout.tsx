import type { Metadata } from 'next'

import './globals.css'
import { Navbar } from '@/components/organisms/Navbar'
import { Fira_Code } from 'next/font/google'

const fira = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
})

export const metadata: Metadata = {
  title: 'Banly Tong | Software Engineer',
  description: 'This is my personal space where I\'m sharing my journey as a software professional for 6+ years.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fira.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
