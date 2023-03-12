import React, { useState } from "react";
import "./mobile-nav.css";
import { IoIosArrowDown } from "react-icons/io";
import SearchComponent from "../search-component/search";
import Btn from "../btn/btn";

const MobileNav = () => {
  const [showSubMenu, setShowSubMenu] = useState("");
  const arr = [
    { id: 1, name: "product", subMenu: [{ id: 3, name: "design" }] },
    { id: 2, name: "About", subMenu: [{ name: "design" }] },
    {
      id: 3,
      name: "About",
      subMenu: [],
    },
  ];

  return (
    <div className="mobile-nav">
      <div className="login-sign-in-btn-container">
        <Btn color={"#e00070"} text="Sign-in" BgColor={"#fff"}></Btn>
        <Btn color={"#fff"} BgColor={"#e00070"} text="Login"></Btn>
      </div>
      <ul className="main-menu">
        {arr.map((menu, index) => (
          <div key={index}>
            <li
              className="main-menu-item"
              onClick={() => {
                setShowSubMenu(menu.id);
                console.log(menu.id);
              }}
            >
              <span>{menu.name}</span> <IoIosArrowDown />
            </li>
            {showSubMenu === menu.id && (
              <ul className="submenu">
                {menu.subMenu.map((submenu) => (
                  <li className="submenu-item">{submenu.name}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};
export default MobileNav;
