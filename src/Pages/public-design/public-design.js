import "./public-design.css";

import axios from "axios";
import { AiTwotoneCamera, AiOutlineDownload } from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import image from "../../image/image-1.jpg";
import WebcamCapture from "../../components/webcam/webcam";
import Slider from "../../components/slideshow/slideshow";
import Header from "../../components/header/header";
import DesktopNav from "../../components/desktop-nav-link/desktop-nav-link";
import SearchComponent from "../../components/search-component/search";
import Btn from "../../components/btn/btn";
import Headings from "../../components/heading/heading";

import html2canvas from "html2canvas";
import ImageMagnifier from "../../components/magnifier/magnifier";

// data
import { homepageDesktopNavData } from "../../utils/data";

const PublicDesign = () => {
  const { designId } = useParams();
  console.log(designId);
  const [magnifiedImg, setMagfiedImag] = useState("");
  const [design, setDesign] = useState([]);
  const screenShotRef = useRef(null);
  const [sefieSrc, setSefieSrc] = useState("");
  const [name, setName] = useState("john doe");
  const [takesefie, setTakeSefie] = useState(false);
  const [magnifierHeight, setmagnifierHeight] = useState("");
  const [magnifieWidth, setmagnifieWidth] = useState("");
  const [magnifying, setMagnifying] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [closemagnifierBtn, setClosemagnifierBtn] = useState(false);

  const showMobileNavHandler = () => {
    setShowMobileNav(!showMobileNav);
  };

  const handleSelectImage = (e) => {
    setSefieSrc(URL.createObjectURL(e.target.files[0]));
    setmagnifierHeight(200);
    setmagnifieWidth(200);
    setMagnifying(true);
  };

  const handleInput = (e) => {
    if (e.target.value.length > 15) {
      alert("Input connot be more than 15");
    }
    setName(e.target.value);
  };
  const capturedMagnifyerHandler = () => {
    setMagfiedImag(JSON.parse(localStorage.getItem("magnifiedimg")));
    console.log(JSON.parse(localStorage.getItem("magnifiedimg")));
    setClosemagnifierBtn(true);
  };

  const closeMagnifierHandler = () => {
    setMagnifying(false);
    localStorage.removeItem("magnifiedimg");
    setClosemagnifierBtn(false);
  };

  const handleSefie = () => {
    setTakeSefie(true);
  };

  const closeCamera = () => {
    setTakeSefie(false);
    setSefieSrc(JSON.parse(localStorage.getItem("sefieImg")).capturedImage);
    setMagfiedImag(JSON.parse(localStorage.getItem("sefieImg")).capturedImage);
    console.log(JSON.parse(localStorage.getItem("sefieImg")).capturedImage);
    localStorage.removeItem("sefieImg");
  };

  const screenShoot = () => {
    html2canvas(screenShotRef.current).then((canvas) => {
      const imagedesign = document.createElement("a");
      imagedesign.download = `Rerha${name}.jpg`;
      imagedesign.href = canvas.toDataURL();
      imagedesign.target = "_blank";
      imagedesign.click();
    });
  };

  const getSingle = async () => {
    try {
      const data = await axios.get(
        `https://connectionpourtous.com/api/v1/admin/getOne?design_id=${designId}`
      );
      console.log(data)
      setDesign(data.data.data.image);
    } catch (erro) {
      setDesign([1]);
    }
  };

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem("designs")).filter(
    //   (item) => item.design_id === eval(designId)
    // );
    // localStorage.removeItem("magnifiedimg");
    // console.log(design);
    // setDesign(data);
    // console.log(data);
    getSingle();
  }, []);

  // for closing magnifyer
  return (
    <React.Fragment>
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

      <div className="barner-creator-and-design-discription">
        <div className="design-discription-container">
          <div className="design-discription-img"></div>
          <div className="design-discription-content">
            <div className="design-discription-heading">
              <Headings text={"jamb sumbmit "}></Headings>
            </div>
            <p>
              ring means andto some other use of this publication without
              written permission of the copyright owner. Any breach of this will
              entail legal action and
            </p>
            <div className="design-discription-heading-posted-user">
              <img src={image} />
              <div>
                <p>promise</p>
                {/* <p>Organizer</p> */}
              </div>
            </div>
            <div className="design-discription-time-container">
              <div>
                <AiTwotoneCamera
                  style={{
                    color: "#e00070",
                  }}
                />
                <span>3 feb 3003</span>
              </div>
              <div>
                <AiTwotoneCamera
                  style={{
                    color: "#e00070",
                  }}
                />
                <span>3 feb 3003</span>
              </div>
            </div>
            <div className="design-discription-view">
              <div>
                <span>3440</span>
                <span
                  style={{
                    color: "#e00070",
                  }}
                >
                  views
                </span>
              </div>
              <div>
                <span>3440</span>
                <span
                  style={{
                    color: "#e00070",
                  }}
                >
                  views
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="public-design-setup">
        <div className="design-image-setup" ref={screenShotRef}>
          {design.map((item, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={image}
                className="design-setup-image"
                style={{ width: "100%", height: "100%" }}
              />
              <img
                key={index}
                src={magnifiedImg}
                className="selected-image"
                style={{
                  width: `${eval(item.width)}px`,
                  height: `${eval(item.height)}px`,
                  borderRadius: "50%",
                  top: `${eval(item.top)}px`,
                  left: `${eval(item.left_side)}px`,
                  border: `${eval(item.thickness)}px solid ${
                    item.border_color
                  }`,
                }}
              />

              <div
                className="user-name"
                style={{
                  top: `${item.name_top - 1.5}px`,
                  left: `${item.name_left - 1.5}px`,
                }}
              >
                <h3
                  style={{
                    fontSize: `${item.font_size}px`,
                    fontWeight: `${item.font_weight}px`,
                    color: item.font_color,
                  }}
                >
                  {name}
                </h3>
                <p>IM ATTENDING</p>
              </div>
            </div>
          ))}
        </div>
        <div className="screen-Shot">
          <div className="design-image-setup screen-Shot">
            <img src={image} className="design-setup-image" />

            <img src={magnifiedImg} className="selected-image" />
          </div>
        </div>
        {/* the design-setup styling is applied from admain css */}
        {/* </div> */}
        <div className="public-positioning-form">
          <div className="form-input">
            <input type="text" placeholder="two name" onChange={handleInput} />
          </div>
          <div className="form-input">
            {/* style from admin css file*/}
            <input type="file" id="file" onChange={handleSelectImage} />
            <label className="file-btn" htmlFor="file">
              choose image
            </label>
          </div>
          <div className="take-sefie-and-download-container">
            <button
              className="other-option-btn sefie-btn"
              onClick={handleSefie}
            >
              <AiTwotoneCamera />
            </button>
            <button
              className=" other-option-btn download-btn"
              onClick={screenShoot}
            >
              <AiOutlineDownload />
            </button>
          </div>
        </div>
      </div>

      {takesefie && (
        <div className="selfie-container">
          <WebcamCapture closeCamera={closeCamera} />
        </div>
      )}
      {magnifying && (
        <div className="magnifier-controller">
          {magnifying && (
            <div className="magnified-ok-btn">
              <Btn
                text={"OK"}
                color="#e00070"
                event={closeMagnifierHandler}
              ></Btn>
            </div>
          )}

          <ImageMagnifier
            magnifierHeight={magnifierHeight}
            magnifieWidth={magnifieWidth}
            src={sefieSrc}
            capturedMagnifyerHandler={capturedMagnifyerHandler}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default PublicDesign;
