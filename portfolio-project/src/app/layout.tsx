import './globals.css'
import NavBar from './NavBar'
import HashScroll from './HashScroll'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <HashScroll>
          <NavBar />
          {children}
        </HashScroll>
        
        </body>
    </html>
  )
}
