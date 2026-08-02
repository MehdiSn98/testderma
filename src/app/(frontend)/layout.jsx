import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './styles.css'

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="bg-[#faf6f0] text-[#3b271a] antialiased font-vazir min-h-screen flex flex-col justify-between m-0 p-0">
        <Header />
        <main className="flex-grow w-full relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}