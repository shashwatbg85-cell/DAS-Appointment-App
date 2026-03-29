import React from "react";
import ContactMessage from "../components/Static/ContactMessage/ContactMessage";

const Contact = () => {
  return  (
  <>
  <div className="d-flex mt-5 justify-content-center">
      <h6>
        <i className="fa-solid fa-headset ms-3"></i>  Emergency Call: 
        1234567890
      </h6> 
      <h6>
        <i className="fa-solid fa-clock ms-3"></i>  10:00am To 10:00pm
      </h6>
      <h6>
        <i className="fa-solid fa-envelope ms-3"></i>  hospital123@gmail.com
      </h6>
    </div>
    <ContactMessage/>
  </>
  );
};

export default Contact;