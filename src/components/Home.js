import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import amazonLogo from "../images/am.webp"; // Import logos
import netflixLogo from "../images/ne.jpg";
import googleLogo from "../images/go.png";
import appleLogo from "../images/app.jpg";
import microsoftLogo from "../images/micro.png";
import facebookLogo from "../images/fa.png";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Navbar />

      {/* Two-Section Layout */}
      <div className="content-container">
        {/* Left Section */}
        <div className="text-section">
          <h1>🚀 Welcome to My Website</h1>
          <p>✨ Discover amazing features with us!</p>
          <p>💡 We provide the <strong>best animations</strong> across platforms!</p>
          <button className="cta-button">🔥 Get Started</button>
        </div>

        {/* Right Section */}
        <div className="image-section">
          {/* Floating Blob SVG */}
          <svg
            className="floating-blob"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(69, 218, 213, 0.2)"
              d="M40.3,-70.6C50.7,-63.1,57.9,-50.4,67.2,-38.3C76.5,-26.2,87.9,-14.6,89.5,-2.1C91,10.4,82.8,22.8,75.2,35.4C67.7,48,60.9,60.7,50.7,67.4C40.4,74,26.6,74.6,13.4,74.5C0.1,74.3,-12.5,73.5,-26.1,69.5C-39.8,65.5,-54.4,58.3,-63.5,46.6C-72.6,34.9,-76.3,18.7,-75.8,2.9C-75.2,-13,-70.5,-28.5,-60.5,-37.5C-50.4,-46.5,-35,-48.9,-21.8,-54.5C-8.6,-60.1,2.2,-69,12.6,-74.2C23,-79.4,32.9,-80.9,40.3,-70.6Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Lottie Animation */}
          <DotLottieReact
            src="/path/to/animation.lottie"
            loop
            autoplay
          />
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="brand-logos">
        <p>⚡ Trusted by top companies worldwide:</p>
        <div className="logos">
          <img src={amazonLogo} alt="Amazon" />
          <img src={netflixLogo} alt="Netflix" />
          <img src={googleLogo} alt="Google" />
          <img src={appleLogo} alt="Apple" />
          <img src={microsoftLogo} alt="Microsoft" />
          <img src={facebookLogo} alt="Facebook" />
        </div>
      </div>
    </div>
  );
};

export default Home;
