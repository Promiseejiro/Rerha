import image from "../../image/dp.jpg";
import "./resizer.css";
import React, { useState, useEffect, useRef } from "react";

const ResizerAnddrag = (left, top) => {
  const avartaRef = useRef();
  const resizerRight = useRef();
  const resizerLeft = useRef();
  const resizerbottom = useRef();
  const relativeContainer = useRef();
  const nameref = useRef();

  const [changeBoxSize, setChangeBoxSize] = useState({
    right: false,
    left: false,
    top: false,
    bottom: false,
    moveImage: false,
    moveName: false,
  });
  const [position, setPosition] = useState({});
  const [boxSize, setBoxSize] = useState({});
//   const mouseMove = (e) => {
//     const x = e.pageX;
//     const y = e.pageY;
//     // const { left, top } = relativeContainer.current.getBoundingClientRect();
// //     const relativeConRight = avartaRef.current.getBoundingClientRect().right;
// //     const relativeConbottom = avartaRef.current.getBoundingClientRect().bottom;
//     const { width, height, bottom, right } =
//       avartaRef.current.getBoundingClientRect();
//     console.log();
//     if (changeBoxSize.right) {
//       const dx = x - left;
//       const newWidth = x - right + width;
//       setPosition({
//         ...position,
//         // top: top,
//         width: newWidth,
//         // the + 40 is to give space between resizer and image
//         bottomResizerWidth: newWidth,
//         reightResizerLeft: x - left - 30,
//       });
//       // if (x < 382) {
//       //   // 402 = left + default width of image
//       //   alert("width cannot be smaller than the current width");
//       //   setChangeBoxSize(false);
//       // }
//     }
//     // if (changeBoxSize.left) {
//     //   const dx = left - x;
//     //   setPosition({
//     //     ...position,
//     //     // top: top,
//     //     leftResizerRight: (x - relativeConRight - width) / -1,
//     //     // left: left - x * 1,
//     //     // width: left - x * 1,
//     //     // width: newRight,
//     //     // the + 40 is to give space between resizer and image
//     //     leftResizer: dx + 40,
//     //   });
//     //   // if (x < 382) {
//     //   //   // 402 = left + default width of image
//     //   //   alert("width cannot be smaller than the current width");
//     //   //   setChangeBoxSize(false);
//     //   // }
//     // }
//     if (changeBoxSize.bottom) {
//       const dy = y - bottom;
//       const newHeight = dy + height;

//       setPosition({
//         ...position,
//         bottomResizerTop: y - top - 32,
//         height: newHeight,
//         bottomResizer: y - 100,
//         rightResizerHeight: newHeight,
//       });
//     }

//     if (changeBoxSize.moveImage) {
//       const dx = x - left + width;
//       const dy = y - bottom;
//       const newLeft = x - left - width * 1.7;
//       const newHeight = bottom + dy - height * 1.5;
//       setPosition({
//         ...position,
//         left: x - left - width / 2,
//         top: y - top - height / 2,
//         reightResizerLeft: x - left + width / 2,
//         rightResizerTop: y - top - height / 2,
//         // leftResizerLeft: x - left - width / 2,
//         // leftResizerTop: y - top - height / 2,
//         bottomResizerTop: y - top + height / 2,
//         bottomResizerLeft: x - left - width / 2,
//         // topResizerTop: y - top - height / 2,
//         // topResizerLeft: x - left - width / 2,
//         // bottomResizer: dy + height + 20,
//       });
//     }

//     if (changeBoxSize.moveName) {
//       const nameConHeigth = nameref.current.getBoundingClientRect().height;
//       const nameConleft = nameref.current.getBoundingClientRect().left;
//       setPosition({
//         ...position,
//         nameTop: y - top - nameConHeigth,
//         nameLeft: x - left - nameConleft,
//       });

//       console.log(position.nameTop);
//     }
//   };
  const mouseUp = (e) => {
    setChangeBoxSize({
      right: false,
      left: false,
      top: false,
      bottom: false,
      moveImage: false,
    });
  };
  return (
    <div>
      <div
        className="resizer r-right"
        style={{
          left: `${position.reightResizerLeft}px`,
          top: `${position.rightResizerTop}px`,
          height: `${position.rightResizerHeight}px`,
        }}
        ref={resizerRight}
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={(e) => {
          setChangeBoxSize({ ...changeBoxSize, right: true });
        }}
        onTouchStart={(e) => {
          setChangeBoxSize({ ...changeBoxSize, right: true });
        }}
        onTouchEnd={mouseUp}
        onMouseUp={mouseUp}
      ></div>
      <div
        className="resizer r-bottom"
        style={{
          top: `${position.bottomResizerTop}px`,
          width: `${position.bottomResizerWidth}px`,
          left: `${position.bottomResizerLeft}px`,
        }}
        ref={resizerbottom}
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={(e) => {
          setChangeBoxSize({ ...changeBoxSize, bottom: true });
        }}
        onMouseUp={mouseUp}
        onTouchStart={(e) => {
          setChangeBoxSize({ ...changeBoxSize, bottom: true });
        }}
        onTouchEnd={mouseUp}
      ></div>

      <div
        className="chosen-image"
        ref={avartaRef}
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={(e) => {
          setChangeBoxSize({ ...changeBoxSize, moveImage: true });
        }}
        onMouseUp={mouseUp}
        onTouchStart={(e) => {
          setChangeBoxSize({ ...changeBoxSize, moveImage: true });
        }}
        onTouchEnd={mouseUp}
        // onMouseMove={(e) => {
        //   // update cursor position
        //   const elem = e.currentTarget;
        //   const { top, left } = elem.getBoundingClientRect();
        //   // calculate cursor position on the image
        //   setPosition({
        //     ...position,
        //     top: top,
        //     left: left,
        //   });
        // }}
        style={{
          // width: `${designProperties.width}rem`,
          // height: `${designProperties.height}rem`,
          // borderTopRightRadius: `${designProperties.border_raduis_top_right}rem`,
          // borderTopLeftRadius: `${designProperties.border_raduis_top_left}rem`,
          // borderBottomRightRadius: `${designProperties.border_raduis_bottom_right}rem`,
          // borderBottomLeftRadius: `${designProperties.border_raduis_bottom_left}rem`,
          // top: `${designProperties.top}px`,
          // width: `${position.right}px`,
          width: `${position.width}px`,
          height: `${position.height}px`,
          // border: `${designProperties.thickness}px solid ${designProperties.border_color}`,
          // height: "112px",
          // width: "112px",
          // borderRadius: "50%",
          // top: "120px",
          left: `${position.left}px`,
          top: `${position.top}px`,
        }}
      >
        <img src={image} />
      </div>
    </div>
  );
};
export default ResizerAnddrag;
