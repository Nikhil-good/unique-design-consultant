import React, { useRef, useEffect } from "react";
import "./FeatureSlider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowLeft, FaArrowRight, FaRocket } from "react-icons/fa";

const FeatureSlider = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const startScroll = (direction) => {
    if (intervalRef.current) return;
    const amount = direction === "left" ? -25 : 25;
    intervalRef.current = setInterval(() => {
      sliderRef.current.scrollLeft += amount;
    }, 10);
  };

  const stopScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const features = [
    {
      title: "CRM & Sales",
      description: "Boost Sales & Customer Relationships with Bitrix24's All-in-One CRM ✨",
      color: "#4e54c8",
      logo: "Bitrix24 CRM",
    },
    {
      title: "Social Media Connect",
      description: "Drive Engagement & Stronger Customer Connections ✨",
      color: "#0077b6",
      logo: "Bitrix24 Contact Center",
    },
    {
      title: "Task & Project Management",
      description: "Organize, Track, and Deliver Projects ✨",
      color: "#00b894",
      logo: "Bitrix24 Projects",
    },
    {
      title: "Copilot AI",
      description: "Your Smart Business Assistant ✨",
      color: "#ff9f1c",
      logo: "Bitrix24 Copilot",
    },
    {
      title: "Marketing",
      description: "All-in-One Marketing Tools ✨",
      color: "#6c5ce7",
      logo: "Bitrix24 Marketing",
    },
    {
      title: "Communication",
      description: "Unify All Your Internal & External Comms ✨",
      color: "#38b000",
      logo: "Bitrix24 Messenger",
    },
  ];

  return (
    <div className="feature-slider-section">
      <div className="section-header">
        <FaRocket className="section-icon" />
        <h2>Your work, elevated</h2>
        <p>One platform built for every team what will you run?</p>
      </div>

      <div className="slider-wrapper">
        <button
          className="slider-btn left bounce"
          onMouseEnter={() => startScroll("left")}
          onMouseLeave={stopScroll}
        >
          <FaArrowLeft />
        </button>

        <div className="slider-container" ref={sliderRef}>
          {features.map((item, index) => (
            <div
              className="slider-card"
              style={{ backgroundColor: item.color }}
              key={index}
              data-aos="zoom-in-up"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="logo">{item.logo}</div>
            </div>
          ))}
        </div>

        <button
          className="slider-btn right bounce"
          onMouseEnter={() => startScroll("right")}
          onMouseLeave={stopScroll}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FeatureSlider;
