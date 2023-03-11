import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import "./desktop-nav-link.css";
const DesktopNav = ({desktopNavContent}) => {
  const [showSubMenu, setShowSubMenu] = useState("");
  return (
    <ul className="desktop-nav-menu">
      {desktopNavContent.map((menu, index) => (
        <div key={index} className="desktop-main-menu">
          <Link to={`${menu.path}`}>
            <li
              className="nav-main-menu-list"
              onClick={() => {
                setShowSubMenu(menu.id);
              }}
            >
              <span>{menu.name}</span>
              {menu.subMenu.length !== 0 && (
                <IoIosArrowDown className="icons" />
              )}
            </li>
          </Link>

          {showSubMenu === menu.id && (
            <ul className="drop-down-menu">
              {menu.subMenu.map((submenu) => (
                <li>{submenu.name}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </ul>
  );
};

export default DesktopNav;
