import './globals.css'
import HashScroll from './HashScroll'
import { Inter, Space_Grotesk, JetBrains_Mono } from '@next/font/google'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
})

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <head />
      <body className="font-sans bg-ink-950 text-text-primary">
        <HashScroll>{children}</HashScroll>
      </body>
    </html>
  )
}
