import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        Watch<span className="text-blue">Movie</span>
      </div>
      <div>
        <small style={{ color: "white" }}>&copy; Suplob Roy | 2021</small>
      </div>
    </div>
  );
};

export default Footer;
