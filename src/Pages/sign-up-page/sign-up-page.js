import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import DesktopNav from "../../components/desktop-nav-link/desktop-nav-link";
import Btn from "../../components/btn/btn";
import Input from "../../components/input-component/input";

// header data

import { homepageDesktopNavData } from "../../utils/data";
//
import axios from "axios";
// css file
// import "./login-form.css";
//icons
import { FaUserAlt } from "react-icons/fa";
//import {MdEmail} from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoIosArrowDropleftCircle } from "react-icons/io";
const SignUpForm = () => {
  const navigate = useNavigate();
  const defaultUser = {
    password: "",
    email: "",
  };
  const [userInfo, setUserInfo] = useState(defaultUser);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const showMobileNavHandler = () => {
    setShowMobileNav(!showMobileNav);
  };

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://connectionpourtous.com/api/v1/login",
        {
          email: userInfo.email,
          password: userInfo.password,
        },
        {
          headers: {
            Accept: "Application/json",
            "content-type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(data);
      localStorage.setItem("token", JSON.stringify(data.data.data.token));
      if (data) {
        navigate("/adminpage");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <div className="sign-in-form-container">
        <Header
          event={showMobileNavHandler}
          navcontentSecondChildContainer={
            <DesktopNav desktopNavContent={homepageDesktopNavData} />
          }
          navcontentThirdChildContainer={
            <div className="login-sign-in-btn-container">
              <Btn
                color={"#e00070"}
                text="Sign-up"
                BgColor={"#fff"}
                to={"/sign-up"}
              ></Btn>
              <Btn
                color={"#fff"}
                BgColor={"#e00070"}
                text="Login"
                to={"/login"}
              ></Btn>
            </div>
          }
        />
        <div className="form-container">
          <div className="form-wrapper">
            <div className="form-type">
              <h3>Sign Up</h3>
            </div>
            <form
              onSubmit={handleSubmit}
              className="user-credential"
              action="urlencoded"
            >
              <Input
                icon={<FaUserAlt />}
                type="email"
                name="email"
                handleChange={handleChange}
              ></Input>
              <Input
                icon={<AiFillEyeInvisible />}
                type="password"
                name="password"
                handleChange={handleChange}
                // <RiLockPasswordFill />
              ></Input>
              <Input
                icon={<AiFillEyeInvisible />}
                type="password"
                name="confirm password"
                handleChange={handleChange}
                // <RiLockPasswordFill />
              ></Input>
              <button
                type="submit"
                className="btn"
                style={{
                  color: "#fff",
                  backgroundColor: "#e00070",
                }}
              >
                Sign-up
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUpForm;
