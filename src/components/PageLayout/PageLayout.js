import React from "react";
import Footer from "../Footer.js/Footer";
import Header from "../Header/Header";
import Sidebar from "../SideBar/Sidebar";
const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container my-4">
        <div className="row">
          <Sidebar />
          <div className="col-md-9 my-2">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
