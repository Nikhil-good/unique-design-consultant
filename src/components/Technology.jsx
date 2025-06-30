import React from "react";
import "./Technology.css";

import wazzup from "../assets/partners/Wazzup24.jpg";
import chatapp from "../assets/partners/chatapp.jpg";
import zoho from "../assets/partners/zoho.jpg";
import bitrix from "../assets/partners/bitrix.png";
import edna from "../assets/partners/edna.webp";
import propertyFinder from "../assets/partners/property-finder.jpg";
import hubspot from "../assets/partners/hubspot.jpg";
import telephony from "../assets/partners/Telephony integration.png";
import myhub from "../assets/partners/myhub.jpg";

const logos = [
  { src: bitrix, top: "10%", left: "15%" },
  { src: telephony, top: "10%", left: "65%" },
  { src: wazzup, top: "80%", left: "10%" },
  { src: propertyFinder, top: "30%", left: "10%" },
  { src: hubspot, top: "60%", left: "20%" },
  { src: zoho, top: "35%", left: "45%" },
  { src: edna, top: "35%", left: "70%" },
  { src: chatapp, top: "60%", left: "55%" },
  { src: myhub, top: "45%", left: "80%" },
];

const Technology = () => {
  return (
    <div className="floating-logo-wrapper">
      <h2 className="section-heading">Our Technology Partners</h2>

      {logos.map((logo, index) => (
        <div
          key={index}
          className="floating-logo"
          style={{
            top: logo.top,
            left: logo.left,
            animationDuration: `${4 + index * 4}s`,
          }}
        >
          <img src={logo.src} alt={`partner-${index}`} />
        </div>
      ))}

      {/* Floating colorful bubbles */}
      <div className="bubble pink"></div>
      <div className="bubble blue"></div>
      <div className="bubble green"></div>
      <div className="bubble yellow"></div>
      <div className="bubble purple"></div>
    </div>
  );
};

export default Technology;
