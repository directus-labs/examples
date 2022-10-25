import Notice from "~/components/Notice.tsx";
import Header from "~/components/Header.tsx";
import Info from "~/components/Info.tsx";
import Footer from "~/components/Footer.tsx";

export default function DefaultLayout({ children }) {
  return (
    <>
      <div className="layout">
        <Notice />
        <Header />
        {children}
        <Info />
        <Footer />
      </div>
    </>
  );
}