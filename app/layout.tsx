import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mentori Im - Privacy Policy',
  description: 'Privacy Policy for Mentori Im application',
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
