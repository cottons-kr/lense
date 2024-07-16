import { Navbar } from '@/components/ui/Navbar'

import '../app.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'

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
