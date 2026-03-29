import React from "react";
import "./ShortIntro.css";
import ImageHos from '../../../assets/images/Screenshot 2026-03-21 152831.png';

const ShortIntro = () => {
  return (
    <>
      <div className="intro-container">
        <div className="row">
            <div className="col-md-6 img-container">
                <img src={ImageHos} alt= "Hospital Image" className="hos-image" />
            </div>
            <div className="col-md-5 info-container">
                <h1>College Project</h1>
                <h6>A Super Specility Hospital</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Provident numquam deleniti eius porro! Aliquam modi 
                  vel odit porro dolor cumque fugiat, inventore enim 
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Provident numquam deleniti eius porro! Aliquam modi 
                  vel odit porro dolor cumque fugiat, inventore enim 
                </p>
                <button className="btn btn-primary">Book A Appointment Now</button>
            </div>
       </div>
      </div>
    </>
  );
};

export default ShortIntro;