import React from "react";
import spinner from "../images/spinner.gif";
import "./Preload.scss";

const Preloader = () => {
  return (
    // <div className="d-flex  align-items-center justify-content-center" style={{height:'100vh'}}>
    //     <img src={spinner} alt="" />
    // </div>

    <div class="circleContainer">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  );
};

export default Preloader;
