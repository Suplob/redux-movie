import React from "react";
import "./Preload.scss";

const Preloader = () => {
  return (
    // <div className="d-flex  align-items-center justify-content-center" style={{height:'100vh'}}>
    //     <img src={spinner} alt="" />
    // </div>

    <div className="containerOfCircle">
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
    </div>
  );
};

export default Preloader;
