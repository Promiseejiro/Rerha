import React, { useState, useEffect } from "react";
import "./footer.css";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer-container">
        <ul className="footer-1">
          <li>Product</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <ul className="footer-2">
          <li>DEMO</li>
          <li>Contact</li>
          <li>Contact</li>
        </ul>
        <div className="footer-3">
          <div>
            <span className="rerha hero-span span-left"> RER</span>
            <span className="rerha span-right"> HA</span>
          </div>
        </div>
        <p className="footer-4">Copyright @023 RERHA inc. All right reserve</p>
      </div>
    </React.Fragment>
  );
};
export default Footer;
