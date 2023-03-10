import React, { useState } from "react";
import "./header.css";
// icons

// components
import DesktopNav from "../desktop-nav-link/desktop-nav-link";
import Btn from "../mobile-nav-btn/btn";
import SearchComponent from "../search-component/search";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({
  event,
  navcontentSecondChildContainer,
  navcontentThirdChildContainer,
}) => {
  const [showNav, setShowNav] = useState(false);
  const [id, setId] = useState(0);
  return (
    <div className="homepage-header">
      <div className="header-background">
        <div className="hompage-flex-1"></div>
        <div className="hompage-flex-2"></div>
      </div>
      <div className="header-content">
        <h1 className="logo">R</h1>
        {/* <DesktopNav /> */}
        {navcontentSecondChildContainer}
        <div className="header-search-container-style">
          {/* <SearchComponent /> */}
          {navcontentThirdChildContainer}
        </div>

        <div className="mobile-nav-btn">
          <Btn icon={<AiOutlineMenu />} event={event}></Btn>
        </div>
      </div>
    </div>
  );
};

export default Header;
