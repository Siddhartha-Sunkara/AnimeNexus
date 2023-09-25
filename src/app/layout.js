import Header from '../components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import {AuthContextProvider} from  './context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AnimeNexus',
  description: 'Unleash the Power of AnimeNexus - Your Portal to the Enchanting Anime Realm! 🌟 Immerse yourself in a boundless world of anime wonders with our cutting-edge website, delivering the freshest updates, captivating series, and exclusive insights! 🚀 Stay connected to your favorite shows and discover new ones - all in one vibrant hub!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/Logo.png' />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
        <Header />
        
        {children}
        <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
        
/>
        </AuthContextProvider>
      </body>
    </html>
  )
}
