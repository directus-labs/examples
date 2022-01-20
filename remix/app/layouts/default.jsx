import Notice from "~/components/Notice";
import Header from "~/components/Header";
import Info from "~/components/Info";
import Footer from "~/components/Footer";

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