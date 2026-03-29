import React from 'react';

const Topbar = () => {
  return (
  <>
    <div className="topbar-container">
      <h6>
        {" "}
        <i className="fa-solid fa-headset"></i>  Emergency Call: 
        1234567890
      </h6> 
      <h6>
        {" "}
        <i className="fa-solid fa-clock"></i>  10:00am To 10:00pm
      </h6>
      <h6>
        {" "}
        <i className="fa-solid fa-envelope"></i>  hospital123@gmail.com
      </h6>
      <h6>
        {" "}
        <i className="fa-regular fa-language"></i>  English
      </h6>
    </div>
  </>
  );
};

export default Topbar;