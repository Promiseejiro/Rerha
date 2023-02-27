import "./select-design.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../image/image-1.jpg";
// import Paginate from "../../components/pagination/pagination";
const SelectDesign = ({ showMobileNav }) => {
  const [designs, setDesigns] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const [indexOfFirstPost, setIndexOfFirstPage] = useState(0);
  const [indexOfLastPost, setIndexOfLastPage] = useState(12);
  const [count, setCount] = useState(0);
  const [filteredDesign, setFilteredDesign] = useState([]);

  const getDesigns = async () => {
    const data = await axios.get(
      "https://connectionpourtous.com/api/v1/admin/get"
    );
    localStorage.setItem("designs", JSON.stringify(data.data.data.images));
    if (!data.data.data.images) {
      setDesigns([]);
    }

    console.log( data.data)
    setFilteredDesign(
      data.data.data.images.slice(indexOfFirstPost, indexOfLastPost)
    );
    setDesigns(data.data.data.images);
    setCount(Math.ceil(data.data.data.images.length / postPerPage));
  };

  const paginateHandler = (event, value) => {
    setCurrentPage(value);
    setIndexOfFirstPage(postPerPage * value);
    setIndexOfLastPage(postPerPage * value + 12);
    setFilteredDesign(designs.slice(indexOfFirstPost, indexOfLastPost));
  };

  useEffect(() => {
    getDesigns();
  }, []);
  return (
    <div className="select-design">
      <div className="design-container">
        <div className="design-selection">
          {filteredDesign.map((design, index) => {
            return (
              <div className="design-item" key={index}>
                <div className="head">
                  <h6>Event</h6>
                  <div className="number-of-view">
                    <h6>View</h6>
                    <h6>17818</h6>
                  </div>
                  <div className="number-of-view">
                    <h6>Usage</h6>
                    <h6>17818</h6>
                  </div>
                  <h6>Feb 12-2023</h6>
                </div>
                <Link to={`/design/${design.id}`}>
                  <img
                    src={`https://connectionpourtous.com/api/v1/admin/${design.file_name}`}
                    className="selection-design-item"
                  />
                </Link>

                <div className="design-details">
                  <h4>Jam Submit</h4>
                  <p className="design-details-paragraph">
                    jamb submit mibilization and submit preperation for maximium
                    palnning jamb submit mibilization and submit preperation for
                    maximium palnning jamb submit mibilization and submit
                    preperation for maximium palnning
                  </p>
                  <div className="engage-container">
                    <button>share</button>
                    <button>comment</button>
                    <button>like</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Paginate
        page={currentPage}
        count={count}
        paginationHandler={paginateHandler}
      ></Paginate> */}
    </div>
  );
};

export default SelectDesign;
