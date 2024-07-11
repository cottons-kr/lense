import { Navbar } from '@/components/ui/Navbar'

import './app.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
