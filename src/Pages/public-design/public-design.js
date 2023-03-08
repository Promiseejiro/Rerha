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
  };

  const y = () => {

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
    console.log(data);
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
            {design.map((item, index) => {
              console.log(item);
              return (
                <div
                  key={index}
                  style={{
                    width: "30rem",
                    height: "25rem",
                    marginBottom: " 1rem",
                    marginRight: "1rem",
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
        </div>
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
