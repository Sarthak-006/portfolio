import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sarthak Shilwant - AI Engineer & Blockchain Developer',
  description: 'Portfolio of Sarthak Shilwant, an AI Engineer and Blockchain Developer specializing in machine learning, web3, and game development.',
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