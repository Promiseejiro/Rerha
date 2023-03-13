import image from "../../image/dp.png";
import plusIcon from "../../image/plus-icon.png";
import defaultDesign from "../../image/placeholder.png";
import "./admin-page.css";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// icons

import { AiOutlinePlus } from "react-icons/ai";
// component
import { userDesktopNavData } from "../../utils/data";
// components
import Header from "../../components/header/header";
import UserDashboardHeaderNav from "../../components/userdashboardHeaderNav/user-dashBoard-nav";
import UserDashboardHeaderInfo from "../../components/user-dashboard-header-info/user-dashboard-header-info";
import DesktopNav from "../../components/desktop-nav-link/desktop-nav-link";
import SearchComponent from "../../components/search-component/search";
import DashboardCards from "../../components/dashbord-card/dashboard-cards";
import Input from "../../components/input-component/input";
// utils
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const AdminPage = () => {
  const navigate = useNavigate();
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
  const [designDetails, setDesignDetails] = useState({});
  const [uploadMessage, setUploadMessage] = useState({});
  const [file, setDesignFile] = useState(defaultDesign);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [touchPoint, setTouchPoint] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const showMobileNavHandler = () => {
    setShowMobileNav(!showMobileNav);
  };
  const mouseMove = (e) => {
    // const innerHeight = document.innerHeight();
    // const innerwidth = document.innerwidth();

    const x = e.clientX;
    const y = e.clientY;
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
  const touchMove = (e) => {
    for (let i = 0; i < e.changedTouches.length; i++) {
      setTouchPoint({
        ...touchPoint,
        x: e.changedTouches[i].clientX,
        y: e.changedTouches[i].clientY,
      });
    }
    const { left, top } = relativeContainer.current.getBoundingClientRect();
    const { width, height, bottom, right } =
      avartaRef.current.getBoundingClientRect();
    const nameRight = nameref.current.getBoundingClientRect().right;
    const nameBottom = nameref.current.getBoundingClientRect().bottom;
    const nameWidth = nameref.current.getBoundingClientRect().width;
    const nameHeight = nameref.current.getBoundingClientRect().height;
    if (
      touchPoint.x < window.innerWidth &&
      touchPoint.y < relativeContainer.current.getBoundingClientRect().bottom
    ) {
    }
    if (
      touchPoint.x < window.innerWidth &&
      touchPoint.y < relativeContainer.current.getBoundingClientRect().bottom
    ) {
      if (changeBoxSize.right) {
        const dx = touchPoint.x - left;
        const newWidth = touchPoint.x - right + width;
        setPosition({
          ...position,
          // top: top,
          width: newWidth,
          // the + 40 is to give space between resizer and image
          bottomResizerWidth: newWidth,
          reightResizerLeft: touchPoint.x - left - 30,
        });
        // if (x < 382) {
        //   // 402 = left + default width of image
        //   alert("width cannot be smaller than the current width");
        //   setChangeBoxSize(false);
        // }
      }
      if (changeBoxSize.bottom) {
        const dy = touchPoint.y - bottom;
        const newHeight = dy + height;

        setPosition({
          ...position,
          bottomResizerTop: touchPoint.y - top - 32,
          height: newHeight,
          bottomResizer: touchPoint.y - 100,
          rightResizerHeight: newHeight,
        });
      }

      if (changeBoxSize.moveImage) {
        const dx = touchPoint.x - left + width;
        const dy = touchPoint.y - bottom;
        const newLeft = touchPoint.x - left - width * 1.7;
        const newHeight = bottom + dy - height * 1.5;

        setPosition({
          ...position,
          left: touchPoint.x - left - width / 2,
          top: touchPoint.y - top - height / 2,
          reightResizerLeft: touchPoint.x - left + width / 2,
          rightResizerTop: touchPoint.y - top - height / 2,
          bottomResizerTop: touchPoint.y - top + height / 2,
          bottomResizerLeft: touchPoint.x - left - width / 2,
          cursor: "move",
        });

        // console.log(
        //   (window.innerHeight - touchPoint.y) * 100,
        //   (window.innerWidth - touchPoint.x) * 100
        // );
      }

      if (changeBoxSize.moveName) {
        const nameConHeigth = nameref.current.getBoundingClientRect().height;
        const nameConleft = nameref.current.getBoundingClientRect().left;
        setPosition({
          ...position,
          nameTop: touchPoint.y - top - nameConHeigth,
          nameLeft: touchPoint.x - left - nameWidth / 2,
          bottomNameResizerLeft: touchPoint.x - left - nameWidth / 2,
          bottomNameResizerTop: touchPoint.y - top,
          rightNameResizerRight:
            touchPoint.x - left + nameWidth - nameWidth / 2,
          rightNameResizerTop: touchPoint.y - top - nameConHeigth,
          cursor: "move",
        });
        console.log("moving");
      }

      if (changeBoxSize.nameRight) {
        console.log(nameRight, nameWidth);
        setPosition({
          ...position,
          rightNameResizerRight: touchPoint.x - left - 31,
          bottomNameResizerWidth: touchPoint.x - nameRight + nameWidth,
          newNameWidth: touchPoint.x - nameRight + nameWidth,
        });
      }
      if (changeBoxSize.nameBottom) {
        console.log(nameBottom, nameHeight);
        setPosition({
          ...position,
          bottomNameResizerTop: touchPoint.y - top - 31,
          newNameHeight: touchPoint.y - nameBottom + nameHeight,
          rightNameResizerHeight: touchPoint.y - nameBottom + nameHeight,
        });
      }
    } else {
      setPosition({
        ...position,
        left: touchPoint.x - left,
        top: touchPoint.y - top,
        reightResizerLeft: touchPoint.x - left,
        rightResizerTop: touchPoint.y - top,
        bottomResizerTop: touchPoint.y - top,
        bottomResizerLeft: touchPoint.x - left,
        cursor: "move",
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

  const handleChange = (e) => {
    setDesignDetails({
      ...designDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    console.log(file);
    e.preventDefault();
    const formData = new FormData();
    const filename = Date.now() + design.name;
    const design_id = uuidv4();
    formData.append("file", file, file.name);
    formData.append("name", designDetails.name);
    formData.append("design_id", design_id);
    formData.append("top", position.top);
    formData.append("left", position.left);
    formData.append("width", position.width);
    formData.append("height", position.height);

    formData.append("border_raduis_top_right", designDetails.discription);
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
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "multipart/form-data",
            Accept: "multipart/form-data",
          },
        }
      );
      if (data.data.success) {
        navigate(`/design/${design_id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const { top, bottom, width } = avartaRef.current.getBoundingClientRect();

    const nameBottom = nameref.current.getBoundingClientRect().bottom;
    const nameWidth = nameref.current.getBoundingClientRect().width;

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
      <Header
        event={showMobileNavHandler}
        navcontentSecondChildContainer={
          <DesktopNav desktopNavContent={userDesktopNavData} />
        }
        navcontentThirdChildContainer={
          <UserDashboardHeaderInfo user={user.email} />
        }
      />
      <div className="modal">
        <p>successfully uploaded</p>
      </div>

      <div className="admin-upload-container">
        <div
          className="design-setup"
          onTouchEnd={mouseUp}
          onTouchMove={touchMove}
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
                <AiOutlinePlus
                  // src={plusIcon}
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "#fff",
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
              onTouchStart={(e) => {
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
              <h3>John Doe</h3>
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
          </div>
          <div
            style={{
              padding: "1rem",
            }}
          >
            <Input
              icon={null}
              type="name"
              name="name"
              handleChange={handleChange}
            ></Input>
            <Input
              icon={null}
              type="discription"
              name="discription"
              handleChange={handleChange}
            ></Input>
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
