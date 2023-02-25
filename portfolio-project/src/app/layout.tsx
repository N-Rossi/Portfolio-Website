import './globals.css'
import NavBar from './NavBar'
import HashScroll from './HashScroll'
import { Nanum_Gothic, Oxygen } from '@next/font/google'

const gothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={oxygen.className}>
      <head>

      </head>
      <body className=''>
        <HashScroll>
          <NavBar />
          {children}
        </HashScroll>
        
        </body>
    </html>
  )
}
