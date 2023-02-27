import { Link, Outlet } from "react-router-dom";

import "./sidebar.css";
import MobileNav from "../mobile-nav/mobile-nav";

// component

const SideBar = ({ children, width, direction, top, left }) => {
  return (
    <div className="main-container">
      <div
        className="side-bar"
        style={{
          width: width,
          top: top,
          left: left,
        }}
      >
        <MobileNav />
      </div>
      <Outlet />
    </div>
  );
};

export default SideBar;
