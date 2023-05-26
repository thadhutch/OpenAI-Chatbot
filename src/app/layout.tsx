import './globals.css'
import { Inter } from 'next/font/google'
import Chat from '../components/Chat'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movieman',
  description: 'Your website for all kinds of movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Chat />
        {children}
      </body>
    </html>
  )
}
