import './globals.css'
import "react-datepicker/dist/react-datepicker.css";
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Carbee</title>
      <body>
        <Providers>
          <main className="h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}