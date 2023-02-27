import "./public-design.css";
import { AiTwotoneCamera, AiOutlineDownload } from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import image from "../../image/image-1.jpg";
import Slider from "../../components/slideshow/slideshow";
import WebcamCapture from "../../components/webcam/webcam";
import html2canvas from "html2canvas";
import PixoImage from "../../components/pixo/pixo";
import ImageMagnifier from "../../components/magnifier/magnifier";

const PublicDesign = ({ showMobileNav }) => {
  const { designId } = useParams();
  console.log(designId);
  const [magnifiedImg, setMagfiedImag] = useState("");
  const [design, setDesign] = useState([]);
  const screenShotRef = useRef(null);
  const [sefieSrc, setSefieSrc] = useState("");
  const [name, setName] = useState("john doe");
  const [selectedImage, setSelectedImage] = useState("");
  const [takesefie, setTakeSefie] = useState(false);
  const [magnifierHeight, setmagnifierHeight] = useState("");
  const [magnifieWidth, setmagnifieWidth] = useState("");
  const [magnifying, setMagnifying] = useState(false);
  const handleSelectImage = (e) => {
    setSefieSrc(URL.createObjectURL(e.target.files[0]));
    setmagnifierHeight(200);
    setmagnifieWidth(200);
    setMagnifying(true);
    console.log(e.target.files[0]);
    console.log("success");
  };

  const y = () => {
    console.log("succes");
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
    setMagnifying(false);
    localStorage.removeItem("magnifiedimg");
  };

  const handleSefie = () => {
    setTakeSefie(true);
  };
  // const showMagnifier = () => {
  //   setMagnifying(true);
  // };

  const closeCamera = () => {
    setTakeSefie(false);
    setSefieSrc(JSON.parse(localStorage.getItem("sefieImg")).capturedImage);
    localStorage.removeItem("sefieImg");
    setMagnifying(true);
    setmagnifierHeight(400);
    setmagnifieWidth(400);
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

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("designs")).filter(
      (item) => item.id === eval(designId)
    );
    localStorage.removeItem("magnifiedimg");
    console.log(design);
    setDesign(data);
    console.log(design);
  }, []);

  useEffect(() => {
    // setSelectedImage(localStorage.getItem("sefieImg"));
    // console.log(screenShotRef);
  }, [sefieSrc]);

  useEffect(() => {
    // setSelectedImage(localStorage.getItem("sefieImg"));
    console.log(screenShotRef);

    // setMagfiedImag(localStorage.getItem("magnifiedimg"));
  }, [magnifiedImg]);

  return (
    <React.Fragment>
      <div className="public-design-setup">
        <div className="public-design-setup-child">
          <div className="design-image-setup" ref={screenShotRef}>
            <img src={image} className="design-setup-image" />
            <div
              className="selected-image"
              style={{
                backgroundImage: { selectedImage },
              }}
            >
              {/* <img src={selectedImage}  /> */}
            </div>

            {design.map((item, index) => {
              console.log(item.left_side);
              return (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    key={index}
                    src={magnifiedImg}
                    className="selected-image"
                    style={{
                      width: `${eval(item.width)}rem`,
                      height: `${eval(item.height)}rem`,
                      borderTopRightRadius: `${eval(
                        item.border_raduis_top_right
                      )}rem`,
                      borderTopLeftRadius: `${eval(
                        item.border_raduis_top_left
                      )}rem`,
                      borderBottomRightRadius: `${eval(
                        item.border_raduis_bottom_right
                      )}rem`,
                      borderBottomLeftRadius: `${eval(
                        item.border_raduis_bottom_left
                      )}rem`,
                      top: `${eval(item.top) - 30}px`,
                      left: `${eval(item.left_side) - 30}px`,
                      border: `${eval(item.thickness)}px solid ${
                        item.border_color
                      }`,
                    }}
                  />

                  <div
                    className="user-name"
                    style={{
                      top: `${item.name_top - 1.5}rem`,
                      left: `${item.name_left - 1.5}rem`,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: `${item.font_size}rem`,
                        fontWeight: `${item.font_weight}px`,
                        color: item.font_color,
                      }}
                    >
                      {name}
                    </h3>
                    <p>IM ATTENDING</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="screen-Shot">
            <div className="design-image-setup screen-Shot">
              <img src={image} className="design-setup-image" />

              <img src={selectedImage} className="selected-image" />
            </div>
          </div>
          {/* the design-setup styling is applied from admain css */}
          <div className="public-positioning-form">
            <div className="form-input">
              <input
                type="text"
                placeholder="two name"
                onChange={handleInput}
              />
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
      </div>
      {takesefie && (
        <div className="selfie-container">
          <WebcamCapture closeCamera={closeCamera} />
        </div>
      )}

      {/* <Magnfier /> */}
      {magnifying && (
        <div className="magnifier-controller">
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
