import React, { useState, useRef } from "react";

import Webcam from "react-webcam";
//
import "./webcam.css";

//alert(deviceSize.innerHeight)

const WebcamCapture = ({ closeCamera }) => {
  const [src, setSrc] = useState("");
  const webCamRef = useRef(null);

  const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "user",
  };

  const capturePhoto = React.useCallback(
    // const [deviceSize, setDeviceSize] = useState(getWindowSize//());
    () => {
      const imageSrc = webCamRef.current.getScreenshot();
      localStorage.setItem(
        "sefieImg",
        JSON.stringify({ capturedImage: imageSrc })
      );
      // close sefie container
      closeCamera();
    },
    [webCamRef]
  );

  return (
    <React.Fragment>
      <div className="webcam-container">
        <Webcam
          className="current-image"
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          ref={webCamRef}
        ></Webcam>
        <div className="camera-option-container">
          {/* {src && (
            <div>
              <img src={src} alt="captured" />
            </div>
          )} */}
        </div>
        <button onClick={capturePhoto} className="capture-photo">
          Capture photo
        </button>
      </div>
    </React.Fragment>
  );
};

export default WebcamCapture;
