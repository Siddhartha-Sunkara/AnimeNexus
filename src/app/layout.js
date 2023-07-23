import Header from '../components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anime Website',
  description: 'Unleash the Power of AnimeNexus - Your Portal to the Enchanting Anime Realm! 🌟 Immerse yourself in a boundless world of anime wonders with our cutting-edge website, delivering the freshest updates, captivating series, and exclusive insights! 🚀 Stay connected to your favorite shows and discover new ones - all in one vibrant hub!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/Logo.png' />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
