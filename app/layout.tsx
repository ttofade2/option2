import type { Metadata } from 'next'
import { Cardo, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cardo = Cardo({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cardo"
})

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: "--font-open-sans"
})

export const metadata: Metadata = {
  title: 'Dr. Toyin Tofade | College President, Senior Pastor, Global Leader',
  description: 'Dr. Toyin Tofade is a visionary leader at the intersection of healthcare, higher education, and faith. 10th President of Albany College of Pharmacy and Health Sciences. Senior Pastor. Author. Speaker.',
  keywords: ['Dr. Toyin Tofade', 'ACPHS President', 'pharmacy education', 'healthcare leadership', 'women in leadership', 'faith leader', 'speaker'],
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cardo.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
