
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PageLayout({ children, noNav = false }) {
  return (
    <>
      <Header showNav={!noNav} />
      <div className="page-content">{children}</div>
      <Footer />
    </>
  );
}

export default PageLayout;
