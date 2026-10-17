export const metadata = {
  title: "Chimney Service Ghaziabad | Faber Hafele Elica",
  description: "Chimney Service Ghaziabad - Call 8796284796",
  robots: { index: false, follow: false }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><meta name="robots" content="noindex, nofollow" /></head>
      <body style={{margin:0, fontFamily:'system-ui', background:'#f8fafc'}}>{children}</body>
    </html>
  )
}
