import image from "../../image/dp.jpg";
import "./admin-page.css";
import React, { useState, useEffect } from "react";

// component
import Slider from "../../components/slideshow/slideshow";
// utils
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const AdminPage = ({ showMobileNav }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  const [design, setDesign] = useState("");
  const [designProperties, setDesignProperties] = useState({});
  const [uploadMessage, setUploadMessage] = useState({});
  const [file, setDesignFile] = useState("");
  const propertyChangeHandler = (e) => {
    setDesignProperties({
      ...designProperties,
      [e.target.name]: e.target.value,
    });
    console.log(designProperties.top);
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
    formData.append("name", designProperties.name);
    formData.append("design_id", uuidv4());
    formData.append("top", designProperties.top);
    formData.append("left", designProperties.left);
    formData.append("width", designProperties.width);
    formData.append(
      "border_raduis_top_right",
      designProperties.border_raduis_top_right
    );
    formData.append(
      "border_raduis_top_left",
      designProperties.border_raduis_top_left
    );
    formData.append(
      "border_raduis_bottom_right",
      designProperties.border_raduis_bottom_right
    );
    formData.append(
      "border_raduis_bottom_left",
      designProperties.border_raduis_bottom_left
    );
    formData.append("height", designProperties.height);
    formData.append("border_color", designProperties.border_color);
    formData.append("name_top", designProperties.name_top);
    formData.append("name_left", designProperties.name_left);
    formData.append("font_size", designProperties.font_size);
    formData.append("font_weight", designProperties.font_weight);
    formData.append("font_color", designProperties.font_color);
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

  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <div className="modal">
        <p>successfully uploaded</p>
      </div>

      <div className="admin-upload-container">
        <div className="design-setup">
          <img className="design-setup-image" src={design} />
          <img
            className="image"
            src={image}
            style={{
              width: `${designProperties.width}rem`,
              height: `${designProperties.height}rem`,
              borderTopRightRadius: `${designProperties.border_raduis_top_right}rem`,
              borderTopLeftRadius: `${designProperties.border_raduis_top_left}rem`,
              borderBottomRightRadius: `${designProperties.border_raduis_bottom_right}rem`,
              borderBottomLeftRadius: `${designProperties.border_raduis_bottom_left}rem`,
              top: `${designProperties.top}px`,
              left: `${designProperties.left}px`,
              border: `${designProperties.thickness}px solid ${designProperties.border_color}`,
            }}
          />
          <div
            className="user-name"
            style={{
              top: `${designProperties.name_top}rem`,
              left: `${designProperties.name_left}rem`,
            }}
          >
            <h3
              style={{
                fontSize: `${designProperties.font_size}rem`,
                fontWeight: `${designProperties.font_weight}px`,
                color: designProperties.font_color,
              }}
            >
              John Doe
            </h3>
            <p>IM ATTENDING</p>
          </div>

          <div className="image-positioning-form">
            <form className="positioning-form">
              <div className="image-form-control">
                <label>NAME</label>
                <input
                  type="text"
                  name="name"
                  onChange={propertyChangeHandler}
                />
              </div>
              <div className="image-form-control">
                <label>TOP</label>
                <input
                  type="number"
                  name="top"
                  onChange={propertyChangeHandler}
                />
              </div>
              <div className="image-form-control">
                <label>LEFT</label>
                <input
                  type="number"
                  name="left"
                  onChange={propertyChangeHandler}
                />
              </div>
              <div className="image-form-control">
                <label> BRTR</label>
                <input
                  type="number"
                  name="border_raduis_top_right"
                  onChange={propertyChangeHandler}
                />
              </div>

              <div className="image-form-control">
                <label> BRTL</label>
                <input
                  type="number"
                  name="border_raduis_top_left"
                  onChange={propertyChangeHandler}
                />{" "}
              </div>
              <div className="image-form-control">
                <label>BRBR</label>
                <input
                  type="number"
                  name="border_raduis_bottom_right"
                  onChange={propertyChangeHandler}
                />
              </div>
              <div className="image-form-control">
                <label>BRBL</label>
                <input
                  type="number"
                  name="border_raduis_bottom_left"
                  onChange={propertyChangeHandler}
                />
              </div>
              <div className="image-form-control">
                <label>HEIGHT</label>
                <input
                  type="number"
                  name="height"
                  onChange={propertyChangeHandler}
                />
              </div>
              <div className="image-form-control">
                <label> WIDTH</label>
                <input
                  type="number"
                  name="width"
                  onChange={propertyChangeHandler}
                />
              </div>
              <div className="image-form-control">
                <label>BC</label>
                <input
                  type="text"
                  name="border_color"
                  onChange={propertyChangeHandler}
                />
              </div>
              <div className="image-form-control">
                <label>NAME*T</label>
                <input
                  type="number"
                  name="name_top"
                  onChange={propertyChangeHandler}
                />
              </div>
              <div className="image-form-control">
                <label>NAME*L</label>
                <input
                  type="number"
                  name="name_left"
                  onChange={propertyChangeHandler}
                />
              </div>
              <div className="image-form-control">
                <label>FONT*S</label>
                <input
                  type="number"
                  name="font_size"
                  onChange={propertyChangeHandler}
                />
              </div>
              <div className="image-form-control">
                <label>FONT*W</label>
                <input
                  type="number"
                  name="font_weight"
                  onChange={propertyChangeHandler}
                />
              </div>
              <div className="image-form-control">
                <label>FONT*C</label>
                <input
                  type="text"
                  name="font_color"
                  onChange={propertyChangeHandler}
                />
              </div>
              <div className="generate-submit">
                <input
                  id="file"
                  type="file"
                  name="name"
                  onChange={handleDesignSelector}
                />
                <label htmlFor="file" className="file-btn">
                  select design
                </label>
              </div>
            </form>
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
