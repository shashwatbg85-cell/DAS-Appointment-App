import React from "react";
import "./WhyChoose.css";
import Image1 from "../../../assets/images/Screenshot 2026-03-21 152737.png"
import Image2 from "../../../assets/images/Screenshot 2026-03-21 152806.png"
import Image3 from "../../../assets/images/Screenshot 2026-03-21 152831.png"

const WhyChoose = () => {
  return (
    <>
    <h1 className="text-center mt-5">Why Choose Us?</h1>
    <div className="row why-container">
      <div className="col-md-3">
         <img src={Image1} alt= "Image1" width={'300px'} />
        <h2>Personalize Excellence</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          A odit illo aut, debitis incidunt nulla consequatur in laborum hic,
         qui molestias, dignissimos aliquam! Vitae, optio cumque assumenda omnis
          qui molestias, dignissimos aliquam! Vitae, optio cumque assumenda omnis
        </p>
      </div>
       <div className="col-md-3">
         <img src={Image2} alt= "Image2" width={'300px'} />
        <h2>Trusted Care</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          A odit illo aut, debitis incidunt nulla consequatur in laborum hic,
         qui molestias, dignissimos aliquam! Vitae, optio cumque assumenda omnis
        </p>
      </div>
       <div className="col-md-3">
         <img src={Image3} alt= "Image3" width={'300px'} />
        <h2>Empowering Wellness Journey</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          A odit illo aut, debitis incidunt nulla consequatur in laborum hic,
         qui molestias, dignissimos aliquam! Vitae, optio cumque assumenda omnis
        </p>
      </div>
    </div>
    </>
  );
};

export default WhyChoose;