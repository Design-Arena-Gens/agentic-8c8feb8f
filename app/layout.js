import './globals.css'

export const metadata = {
  title: 'Luxe Hair Salon',
  description: 'Professional hair styling and beauty services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
