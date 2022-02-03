import Notice from "app/components/Notice"
import Header from "app/components/Header"
import Info from "app/components/Info"
import Footer from "app/components/Footer"

export default function DefaultLayout({ children }) {
  return (
    <div className="layout">
      <Notice />
      <Header />
      {children}
      <Info />
      <Footer />
    </div>
  )
}
