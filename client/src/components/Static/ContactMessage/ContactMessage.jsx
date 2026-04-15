import React from "react";
import "./ContactMessage.css";
import LocationMap from "./LocationMap";
import MessageForm from "./MessageForm";

const ContactMessage = () => {
  return (
    <div className="container py-5">
      <div className="row message-container g-4">
        <div className="col-lg-5 d-flex">
          <div className="map-wrapper w-100">
            <LocationMap />
          </div>
        </div>
        <div className="col-lg-7 d-flex">
          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMessage;