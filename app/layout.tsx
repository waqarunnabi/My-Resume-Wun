import './globals.css'

export const metadata = {
  title: 'Resume Of  Waqar Un Nabi',
  description: 'This is Resume Website created by Waar Un Nabi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
