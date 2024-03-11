import type { Metadata } from 'next'

import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
