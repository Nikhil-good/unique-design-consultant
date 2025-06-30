import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-content-container">
        <div className="hero-text">
          <h1>
            One Platform,<br />
            find a <span>Many Possibilities</span>
          </h1>
          <p>Make your business perfect right now!</p>

          {/* Use correct class: free-quote-btn */}
          <a href="#contact" className="free-quote-btn">Free Quote →</a>

          <div className="hero-support">
            <div className="support-icon">📞</div>
            <div>
              <p className="support-label">ONLINE SUPPORT</p>
              <p className="support-number">+91 89588476</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/assets/img/hero/hero-baner1.png"
            alt="Hero Visual"
            className="hero-main-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
