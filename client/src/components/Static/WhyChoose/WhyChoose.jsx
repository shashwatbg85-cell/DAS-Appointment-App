import React from "react";
import "./WhyChoose.css";
import Image1 from "../../../assets/images/Screenshot 2026-03-21 152737.png";
import Image2 from "../../../assets/images/Screenshot 2026-03-21 152806.png";
import Image3 from "../../../assets/images/Screenshot 2026-03-21 152831.png";

const WhyChoose = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="section-title">
          <span>Our Benefits</span>
          <h2>Why Choose Us?</h2>
        </div>

        <div className="why-grid">
          {/* Card 1 */}
          <div className="why-card">
            <div className="img-wrapper">
              <img src={Image1} alt="Personalized Excellence" />
            </div>
            <h3>Personalized Excellence</h3>
            <p>
              We provide tailored healthcare solutions that prioritize your
              unique needs and well-being, ensuring the best possible outcomes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="why-card">
            <div className="img-wrapper">
              <img src={Image2} alt="Trusted Care" />
            </div>
            <h3>Trusted Care</h3>
            <p>
              Our team of dedicated professionals is committed to providing
              safe, reliable, and high-quality medical care you can count on.
            </p>
          </div>

          {/* Card 3 */}
          <div className="why-card">
            <div className="img-wrapper">
              <img src={Image3} alt="Empowering Wellness" />
            </div>
            <h3>Empowering Wellness</h3>
            <p>
              We empower you to take charge of your health journey through
              education, preventative care, and holistic wellness support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;