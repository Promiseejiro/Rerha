import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../../components/pages-header/pages-header.js";
import pageBackground from "../../utils/form-1.jpg";
import Slider from "../../components/slideshow/slideshow.js";
import axios from "axios";
import "./login-form.css";
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
        <div className="form-container">
          <div className="form-wrapper">
            <div className="form-type">
              <h3>Sign in</h3>
            </div>
            <form
              onSubmit={handleSubmit}
              className="user-credential"
              action="urlencoded"
            >
              <div className="form-control">
                <label>
                  <FaUserAlt />
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>

              <div className="form-control">
                <label>
                  <RiLockPasswordFill />
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
                <label>
                  <AiFillEyeInvisible />
                </label>
              </div>
              <button
                type="submit"
                className="btn"
                style={{
                  color: "#fff",
                  backgroundColor: "#da7ff9",
                }}
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUpForm;
