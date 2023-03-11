import React, { useState } from "react";
import image from "../../image/dp.png";

// css
import "./user-dashboard-header-info.css";

const UserDashboardHeaderInfo = ({user}) => {
  return (
    <React.Fragment>
      <div className="user-info-container">
        <div className="user-dashbord-img">
          <img src={image} />
        </div>
        <div className="user-dashboard-name-container">
          <h4>{user}</h4>
          <h6>Active</h6>
        </div>
      </div>
    </React.Fragment>
  );
};
export default UserDashboardHeaderInfo;
