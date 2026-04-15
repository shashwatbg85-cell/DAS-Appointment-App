import React from "react";
import "./ShortIntro.css";
import ImageHos from "../../../assets/images/Screenshot 2026-03-21 152831.png";

const ShortIntro = () => {
  return (
    <div className="intro-container">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 img-container">
            <img src={ImageHos} alt="Hospital Building" className="hos-image" />
          </div>
          <div className="col-lg-6 info-container mt-4 mt-lg-0">
            <span className="badge-text">Welcome to our Clinic</span>
            <h1>College Project</h1>
            <h6>A Super Speciality Hospital</h6>
            <p>
              Experience world-class healthcare with our team of expert
              specialists. We are committed to providing compassionate,
              cutting-edge medical services tailored to your individual needs.
            </p>
            <p>
              Our facility is equipped with the latest medical technology to
              ensure accurate diagnosis and effective treatment for all our
              patients.
            </p>
            <button className="btn btn-appointment">
              Book An Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortIntro;