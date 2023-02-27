import React, { useState, useRef } from "react";
import image from "../../image/image-2.jpeg";
import html2canvas from "html2canvas";
import { stringify } from "query-string";

function ImageMagnifier({
  src,
  width,
  height,
  magnifierHeight,
  magnifieWidth,
  zoomLevel = 1.5,
  capturedMagnifyerHandler,
}) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [newImage, setNewImag] = useState("");
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const screenShotRef = useRef();

  const screenShot = () => {
    html2canvas(screenShotRef.current).then((canvas) => {
      const imagedesign = document.createElement("a");
      // imagedesign.download = "cfi.jpg";
      imagedesign.href = canvas.toDataURL();
      imagedesign.target = "_blank";
      // imagedesign.click();
      setNewImag(imagedesign);
      localStorage.setItem("magnifiedimg", JSON.stringify(imagedesign.href));
      console.log();
    });
  };

  return (
    // the container
    <React.Fragment>
      <div className="magnifier-main-container">
        <div
          style={{
            position: "relative",
            height: height,
            width: width,
          }}
        >
          <img
            className="image-being-magnified"
            src={src}
            style={{ height: "100%", width: "100%" }}
            onClick={(e) => {
              const ele = e.currentTarget;

              console.log(window.pageXOffset);
            }}
            onDragStart={(e) => e.preventDefault()}
            onTouchStart={(e) => {
              // update image size and turn-on magnifier
              const elem = e.currentTarget;
              const { width, height } = elem.getBoundingClientRect();
              setSize([width, height]);
              setShowMagnifier(true);
              console.log("down");
            }}
            onMouseDown={(e) => {
              // update image size and turn-on magnifier
              const elem = e.currentTarget;
              const { width, height } = elem.getBoundingClientRect();
              setSize([width, height]);
              setShowMagnifier(true);
            }}
            onTouchEnd={() => {
              setShowMagnifier(false);
              console.log("down");
              capturedMagnifyerHandler();
              screenShot();
            }}
            onMouseUp={() => {
              setShowMagnifier(false);
              console.log("up");
              capturedMagnifyerHandler();
              screenShot();
            }}
            onTouchMove={(e) => {
              console.log("moving");
              // update cursor position
              const elem = e.currentTarget;
              const { top, left } = elem.getBoundingClientRect();

              // calculate cursor position on the image
              const x = e.pageX - left - window.pageXOffset;
              const y = e.pageY - top - window.pageYOffset;
              setXY([x, y]);
            }}
            onMouseMove={(e) => {
              // update cursor position
              const elem = e.currentTarget;
              const { top, left } = elem.getBoundingClientRect();

              // calculate cursor position on the image
              const x = e.pageX - left - window.pageXOffset;
              const y = e.pageY - top - window.pageYOffset;
              setXY([x, y]);
            }}
          />
          <div
            ref={screenShotRef}
            style={{
              display: showMagnifier ? "" : "none",
              position: "absolute",
              // prevent magnifier blocks the mousemove event of img
              pointerEvents: "none",
              // set size of magnifier
              height: `${magnifierHeight}px`,
              width: `${magnifieWidth}px`,
              // move element center to cursor pos
              top: `${y - magnifierHeight / 2}px`,
              left: `${x - magnifieWidth / 2}px`,
              opacity: "1", // reduce opacity so you can verify position
              border: "1px solid lightgray", // show the border of magnifier
              backgroundColor: "white",
              backgroundImage: `url('${src}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${imgWidth * zoomLevel}px ${
                imgHeight * zoomLevel
              }px`,
              backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
              backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
              borderRadius: `50%`,
            }}
          />
        </div>
      </div>
      <img
        src={newImage.href}
        // style={{
        //   borderRadius: "50%",
        // }}
      />
    </React.Fragment>
  );
}

export default ImageMagnifier;
