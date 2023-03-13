import React, { useState, useRef, useEffect } from "react";
import image from "../../image/image-2.jpeg";
import html2canvas from "html2canvas";
import { stringify } from "query-string";
import "./magnifier.css";
function ImageMagnifier({
  src,
  width,
  height,
  magnifierHeight,
  magnifieWidth,
  zoomLevel = 1.5,
  capturedMagnifyerHandler,
  closeMagnifierHandler,
}) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [newImage, setNewImag] = useState("");
  const [[x, y], setXY] = useState([0, 0]);
  const [touchPoint, setTouchPoint] = useState({});
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const screenShotRef = useRef();
  const relativConRef = useRef();

  const screenShot = () => {
    html2canvas(screenShotRef.current).then((canvas) => {
      const imagedesign = document.createElement("a");
      imagedesign.href = canvas.toDataURL();
      imagedesign.target = "_blank";
      localStorage.setItem("magnifiedimg", JSON.stringify(imagedesign.href));
      setNewImag(imagedesign.href);
    });
    closeMagnifierHandler();
  };
  useEffect(() => {
    capturedMagnifyerHandler();
  }, [newImage]);

  return (
    // the container
    <React.Fragment>
      <div className="magnifier-main-container">
        <div
          style={{
            position: "relative",
            width: "100%",

          }}
          ref={relativConRef}
          onTouchMove={(e) => {
            // const touch =

            // const { top, left } = elem.getBoundingClientRect();
            const { top, left, width, height } =
              relativConRef.current.getBoundingClientRect();
            for (let i = 0; i < e.changedTouches.length; i++) {
              setTouchPoint({
                ...touchPoint,
                x: e.changedTouches[i].clientX,
                y: e.changedTouches[i].clientY,
              });
            }
            const x = touchPoint.x - left;
            const y = touchPoint.y - top;
            console.log(x, y);
            // console.log(touchPage.touchPageX, touchPage.touchPageY);
            // // update cursor position

            // calculate cursor position on the image

            setXY([x, y]);
          }}
        >
          <img
            className="image-being-magnified"
            src={src}
            onClick={(e) => {
              const ele = e.currentTarget;

              
            }}
            onDragStart={(e) => e.preventDefault()}
            onTouchStart={(e) => {
              // update image size and turn-on magnifier
              const elem = e.currentTarget;
              const { width, height } = elem.getBoundingClientRect();
              setSize([width, height]);
              setShowMagnifier(true);
            }}
            onMouseDown={(e) => {
              // update image size and turn-on magnifier
              const elem = e.currentTarget;
              const { width, height } = elem.getBoundingClientRect();
              setSize([width, height]);
              setShowMagnifier(true);
            }}
            onMouseMove={(e) => {
              // update cursor position
              const elem = e.currentTarget;
              const { top, left } = elem.getBoundingClientRect();

              // calculate cursor position on the image
              const x = e.clientX - left;
              const y = e.clientY - top;
              setXY([x, y]);
            }}
            onTouchEnd={() => {
              screenShot();
              setShowMagnifier(false);
            }}
            onMouseUp={() => {
              screenShot();
              setShowMagnifier(false);
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
    </React.Fragment>
  );
}

export default ImageMagnifier;
