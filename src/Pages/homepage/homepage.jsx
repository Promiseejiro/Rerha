import React, { useState } from "react";
import { Link } from "react-router-dom";

import SideBar from "../../components/sideBar/sidebar";
import Slider from "../../components/slideshow/slideshow";
// import "./homepage.css"
// import {Link} from "react-router-dom"
// svg
// import homepageSvg from "../../utils/homepage.svg"
import Btn from "../../components/sign-loggin-btn/btn.js";
import "./homepage.css";
//import FileUpload from "../../components/fileupload/fileupload.js"
const HomePage = ({ showMobileNav }) => {
  return (
    <div className="homepage-wrapper">
      <div className="homepage-background">
        <div className="homepage-hero">
          <Slider showMobileNav={showMobileNav} />
          <div className="hero-content">
            <div>
              <span className="rerha hero-span span-left"> RER</span>
              <span className="rerha span-right"> HA</span>
            </div>
            <p>
              Make your event visible by Using rerha publicitys multiple design
              generator.
            </p>
            <Link to="/select">
              <button>Explore</button>
            </Link>
          </div>
          {/* <Link to='/admin/page'><button>admin page</button></Link>
  <Link to='/auth/login'><button>login page</button></Link> */}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
