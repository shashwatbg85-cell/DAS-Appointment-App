import React from "react";
import ContactMessage from "../components/Static/ContactMessage/ContactMessage";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info-strip">
        <div className="container d-flex flex-wrap justify-content-center gap-5">
          <div className="info-item">
            <i className="fa-solid fa-headset"></i>
            <div>
              <small className="d-block opacity-75">Emergency Call</small>
              <strong>1234567890</strong>
            </div>
          </div>
          <div className="info-item">
            <i className="fa-solid fa-clock"></i>
            <div>
              <small className="d-block opacity-75">Working Hours</small>
              <strong>10:00am To 10:00pm</strong>
            </div>
          </div>
          <div className="info-item">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <small className="d-block opacity-75">Email Address</small>
              <strong>hospital123@gmail.com</strong>
            </div>
          </div>
        </div>
      </div>
      <ContactMessage />
    </div>
  );
};

export default Contact;