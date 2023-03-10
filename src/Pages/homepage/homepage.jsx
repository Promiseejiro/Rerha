import React, { useState } from "react";

import SideBar from "../../components/sideBar/sidebar";
import Slider from "../../components/slideshow/slideshow";
import Header from "../../components/header/header";
import DesktopNav from "../../components/desktop-nav-link/desktop-nav-link";
import SearchComponent from "../../components/search-component/search";
import SelectDesign from "../select-design/select-design";
import Btn from "../../components/btn/btn";
import Headings from "../../components/heading/heading";
import ProcedureCard from "../../components/procedure-card/procedure-card";

// data
import { homepageDesktopNavData } from "../../utils/data";
// import "./homepage.css"
// import {Link} from "react-router-dom"
// svg
// import homepageSvg from "../../utils/homepage.svg"
// import Btn from "../../components/sign-loggin-btn/btn.js";
import "./homepage.css";
//import FileUpload from "../../components/fileupload/fileupload.js"
const HomePage = () => {
  // states
  const [showMobileNav, setShowMobileNav] = useState(false);
  const showMobileNavHandler = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <div className="homepage-wrapper">
      <Header
        event={showMobileNavHandler}
        navcontentSecondChildContainer={
          <DesktopNav desktopNavContent={homepageDesktopNavData} />
        }
        navcontentThirdChildContainer={
          <div className="login-sign-in-btn-container">
            <Btn
              color={"#E00070"}
              text="Sign-up"
              BgColor={"#fff"}
              to={"/sign-up"}
            ></Btn>
            <Btn
              color={"#fff"}
              BgColor={"#E00070"}
              text="Login"
              to={"/login"}
            ></Btn>
          </div>
        }
      />
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
            <Btn
              BgColor={"#E00070"}
              text="Explore"
              color={"#fff"}
              to={"/select"}
            ></Btn>
          </div>
        </div>
      </div>
      <Headings text="TRENDING"></Headings>
      <SelectDesign></SelectDesign>
      <Headings text="PROCEDURE"></Headings>
      <ProcedureCard></ProcedureCard>
    </div>
  );
};
export default HomePage;
