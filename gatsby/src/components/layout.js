import * as React from "react";
import { Helmet } from "react-helmet";
import Notice from "./notice";
import Header from "./header";
import Info from "./info";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        />
      </Helmet>
      <div className="layout">
        <Notice />
        <Header />
        {children}
        <Info />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
