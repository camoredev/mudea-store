import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/providers/auth'
import Header from '../components/ui/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mudea Store',
  description: 'Sua loja de produtos tecnológicos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </body>
    </html>
  )
}
