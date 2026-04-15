import React from "react";
import "./Facility.css";
import FacilityData from "./FacilityData.json";

const Facility = () => {
  return (
    <section className="facility-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Facilities</h2>
        </div>
        <div className="facility-grid">
          {FacilityData.map((d, i) => (
            <div className="facility-card" key={i}>
              <div className="icon-wrapper">
                <i className={d.icon}></i>
              </div>
              <h5>{d.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facility;