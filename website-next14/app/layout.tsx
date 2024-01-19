export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>    
          <a href="/conduct">Code of Conduct</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/blog">Blog</a>
        </nav>

        {children}
      </body>
    </html>
  )
}
