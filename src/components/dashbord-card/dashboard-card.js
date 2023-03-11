import React, { useEffect, useState } from "react";

// react-icon
import { AiOutlinePlus } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import image from "../../image/dp.png";
import "./dashboard-card.css";
const DashboardCard = () => {
  return (
    <React.Fragment>
      <div className="user-dashboard-card">
        <div className="dashboard-design-info">
          <div className="design-info-name">
            <img src={image} />
            <div>
              <h5>rerha</h5>
              <p>promisesei</p>
            </div>
          </div>
          <button>
            <HiDotsVertical />
          </button>
          <div className="design-time-posted">
            <p>status</p>
            <p>2das ago </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DashboardCard;
