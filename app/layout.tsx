import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genius', //Modify this to modify what appear in the tab when you open our project - See tab in your project
  description: 'AI Platform', // I think this must be the google/seo descriptionç
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
