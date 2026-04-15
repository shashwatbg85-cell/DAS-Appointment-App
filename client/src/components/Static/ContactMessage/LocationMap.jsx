import React from "react";

const LocationMap = () => {
  return (
    <>
    <div className="location-map">
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7114.795199647533!2d81.18640099999998!3d26.92260700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1774441586086!5m2!1sen!2sin" 
    width={"100%"} 
    height={400} 
    style={{ border:0}} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    />
    </div>
    </>
  );
};

export default LocationMap;