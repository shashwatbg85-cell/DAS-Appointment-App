import React from "react";
import "./PatentReviews.css";
import ReviewData from "./PatentReviews.json";

const PatentReviews = () => {
  // Function to render dynamic stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="review-container">
      <div className="container">
        <div className="heading-container">
          <p>Testimonials</p>
          <h1>What Our Patients</h1>
          <h1>Say About Us</h1>
        </div>

        <div className="review-grid">
          {ReviewData.map((d) => (
            <div className="review-card" key={d.id}>
              <div className="user-pic-wrapper">
                <img src={d.pic} alt={d.name} />
              </div>
              <div className="star-rating">{renderStars(d.rating)}</div>
              <div className="user-info">
                <h6>{d.name}</h6>
                <span>{d.address}</span>
              </div>
              <h2 className="comment-title">{d.commentTile}</h2>
              <p className="comment-text">{d.commentDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatentReviews;