import image from "../../image/dp.png";
import plusIcon from "../../image/plus-icon.png";
import defaultDesign from "../../image/placeholder.png";
import "./admin-page.css";
import React, { useState, useEffect, useRef } from "react";

// component

// utils
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const AdminPage = ({ showMobileNav }) => {
  const avartaRef = useRef();
  const resizerRight = useRef();
  const resizerLeft = useRef();
  const resizerbottom = useRef();
  const relativeContainer = useRef();
  const nameref = useRef();
  const nameResizerbottom = useRef();

  const [changeBoxSize, setChangeBoxSize] = useState({
    right: false,
    left: false,
    top: false,
    bottom: false,
    moveImage: false,
    moveName: false,
  });
  const [position, setPosition] = useState({});
  const [design, setDesign] = useState(defaultDesign);
  const [uploadMessage, setUploadMessage] = useState({});
  const [file, setDesignFile] = useState(defaultDesign);

  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);

  const mouseMove = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    const { left, top } = relativeContainer.current.getBoundingClientRect();
    const { width, height, bottom, right } =
      avartaRef.current.getBoundingClientRect();

    const nameRight = nameref.current.getBoundingClientRect().right;
    const nameBottom = nameref.current.getBoundingClientRect().bottom;
    const nameWidth = nameref.current.getBoundingClientRect().width;
    const nameHeight = nameref.current.getBoundingClientRect().height;
    if (changeBoxSize.right) {
      const dx = x - left;
      const newWidth = x - right + width;
      setPosition({
        ...position,
        // top: top,
        width: newWidth,
        // the + 40 is to give space between resizer and image
        bottomResizerWidth: newWidth,
        reightResizerLeft: x - left - 30,
      });
      // if (x < 382) {
      //   // 402 = left + default width of image
      //   alert("width cannot be smaller than the current width");
      //   setChangeBoxSize(false);
      // }
    }
    if (changeBoxSize.bottom) {
      const dy = y - bottom;
      const newHeight = dy + height;

      setPosition({
        ...position,
        bottomResizerTop: y - top - 32,
        height: newHeight,
        bottomResizer: y - 100,
        rightResizerHeight: newHeight,
      });
    }

    if (changeBoxSize.moveImage) {
      const dx = x - left + width;
      const dy = y - bottom;
      const newLeft = x - left - width * 1.7;
      const newHeight = bottom + dy - height * 1.5;
      setPosition({
        ...position,
        left: x - left - width / 2,
        top: y - top - height / 2,
        reightResizerLeft: x - left + width / 2,
        rightResizerTop: y - top - height / 2,
        bottomResizerTop: y - top + height / 2,
        bottomResizerLeft: x - left - width / 2,
        cursor: "move",
      });
    }

    if (changeBoxSize.moveName) {
      const nameConHeigth = nameref.current.getBoundingClientRect().height;
      const nameConleft = nameref.current.getBoundingClientRect().left;
      setPosition({
        ...position,
        nameTop: y - top - nameConHeigth,
        nameLeft: x - left - nameWidth / 2,
        bottomNameResizerLeft: x - left - nameWidth / 2,
        bottomNameResizerTop: y - top,
        rightNameResizerRight: x - left + nameWidth - nameWidth / 2,
        rightNameResizerTop: y - top - nameConHeigth,
        cursor: "move",
      });
    }

    if (changeBoxSize.nameRight) {
      console.log(nameRight, nameWidth);
      setPosition({
        ...position,
        rightNameResizerRight: x - left - 31,
        bottomNameResizerWidth: x - nameRight + nameWidth,
        newNameWidth: x - nameRight + nameWidth,
      });
    }
    if (changeBoxSize.nameBottom) {
      console.log(nameBottom, nameHeight);
      setPosition({
        ...position,
        bottomNameResizerTop: y - top - 31,
        newNameHeight: y - nameBottom + nameHeight,
        rightNameResizerHeight: y - nameBottom + nameHeight,
      });
    }
  };

  const mouseUp = (e) => {
    setChangeBoxSize({
      right: false,
      left: false,
      top: false,
      bottom: false,
      moveImage: false,
    });
  };

  const handleDesignSelector = (e) => {
    setDesignFile(e.target.files[0]);
    setDesign(URL.createObjectURL(e.target.files[0]));
  };
  const handleSubmit = async (e) => {
    console.log(file);
    e.preventDefault();
    const formData = new FormData();
    const filename = Date.now() + design.name;
    formData.append("file", file, file.name);
    formData.append("name", uuidv4());
    formData.append("design_id", uuidv4());
    formData.append("top", position.top);
    formData.append("left", position.left);
    formData.append("width", position.width);
    formData.append("height", position.height);

    formData.append("border_raduis_top_right", 2);
    formData.append("border_raduis_top_left", 2);
    formData.append("border_raduis_bottom_right", 1);
    formData.append("border_raduis_bottom_left", 1);
    formData.append("border_color", "red");
    formData.append("name_top", position.nameTop);
    formData.append("name_left", position.nameLeft);
    formData.append("font_size", 18);
    formData.append("font_weight", 400);
    formData.append("font_color", "red");
    formData.append("border", "12");
    try {
      const data = await axios.post(
        "https://connectionpourtous.com/api/v1/admin/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
            Accept: "multipart/form-data",
          },
        }
      );
      console.log(data);
      alert("successfully uploaded");
    } catch (error) {
      console.log(error.message);
      alert("successfully uploaded");
    }
  };

  useEffect(() => {
    const { left, top, right, bottom, width, height } =
      avartaRef.current.getBoundingClientRect();
    const nameLeft = nameref.current.getBoundingClientRect().left;
    const nameRight = nameref.current.getBoundingClientRect().right;
    const nameTop = nameref.current.getBoundingClientRect().top;
    const nameBottom = nameref.current.getBoundingClientRect().bottom;
    const nameWidth = nameref.current.getBoundingClientRect().width;
    const nameHeight = nameref.current.getBoundingClientRect().heigth;

    console.log(nameref.current.getBoundingClientRect());
    setPosition({
      ...position,
      reightResizerLeft: width,
      reightResizerTop: 0,
      bottomResizerTop: top,
      bottomNameResizerLeft: 0,
      bottomNameResizerTop: nameBottom - top,
      rightNameResizerRight: nameWidth,
      rightNameResizerTop: nameBottom - bottom + nameWidth / 2.8,
      rightNameResizerHeight: "40",
      bottomNameResizerWidth: "200",
    });

    console.log(bottom, nameBottom);
  }, []);
  return (
    <React.Fragment>
      <div className="modal">
        <p>successfully uploaded</p>
      </div>

      <div className="admin-upload-container">
        <div
          className="design-setup"
          onTouchEnd={mouseUp}
          onTouchMove={mouseMove}
          onMouseUp={mouseUp}
          onMouseMove={mouseMove}
          onCopy={(e) => {
            e.preventDefault();
          }}
          // add styiling of cursor here
          // style={{
          //   cursor: "row-resize",
          // }}
          ref={relativeContainer}
        >
          <div className="design-setup-container">
            <div className="select-design-btn">
              <input
                id="file"
                type="file"
                name="name"
                onChange={handleDesignSelector}
              />
              <label htmlFor="file" className="file-btn">
                <img
                  src={plusIcon}
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "red",
                  }}
                />
              </label>
            </div>
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
            <img
              onDragStart={(e) => e.preventDefault()}
              style={{
                border: "2px solid black",
              }}
              className="design-setup-image"
              src={design}
            />
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
              style={{
                width: `${position.width}px`,
                height: `${position.height}px`,
                left: `${position.left}px`,
                top: `${position.top}px`,
                cursor: `${position.cursor}`,
              }}
            >
              <img src={image} />
            </div>

            <div
              className="user-name"
              ref={nameref}
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => {
                setChangeBoxSize({ ...changeBoxSize, moveName: true });
              }}
              onCopy={(e) => {
                e.preventDefault();
              }}
              onSelect={(e) => {
                e.preventDefault();
              }}
              style={{
                top: `${position.nameTop}px`,
                left: `${position.nameLeft}px`,
                height: `${position.newNameHeight}px`,
                width: `${position.newNameWidth}px`,
                cursor: `${position.cursor}`,
              }}
            >
              <h3
                style={
                  {
                    // fontSize: `${designProperties.font_size}rem`,
                    // fontWeight: `${designProperties.font_weight}px`,
                    // color: designProperties.font_color,
                  }
                }
              >
                John Doe
              </h3>
              <p>IM ATTENDING</p>
            </div>
            <div
              className="resizer name-r"
              style={{
                top: `${position.rightNameResizerTop}px`,
                height: `${position.rightNameResizerHeight}px`,
                left: `${position.rightNameResizerRight}px`,
              }}
              // ref={nameResizerbottom}
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => {
                setChangeBoxSize({ ...changeBoxSize, nameRight: true });
              }}
              onMouseUp={mouseUp}
              onTouchStart={(e) => {
                setChangeBoxSize({ ...changeBoxSize, nameRight: true });
              }}
              onTouchEnd={mouseUp}
            ></div>
            <div
              className="resizer name-b"
              style={{
                top: `${position.bottomNameResizerTop}px`,
                width: `${position.bottomNameResizerWidth}px`,
                left: `${position.bottomNameResizerLeft}px`,
              }}
              ref={nameResizerbottom}
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => {
                setChangeBoxSize({ ...changeBoxSize, nameBottom: true });
              }}
              onMouseUp={mouseUp}
              onTouchStart={(e) => {
                setChangeBoxSize({ ...changeBoxSize, nameBottom: true });
              }}
              onTouchEnd={mouseUp}
            ></div>

            <button
              type="submit"
              className="generate-submit"
              onClick={handleSubmit}
            >
              Generate Link
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AdminPage;
