import React, { useEffect, useState } from "react";

import DashboardCard from "./dashboard-card";

// css
import "./dashboard-cards.css";
const DashboardCards = () => {
  const [arr, setArr] = useState([1, 2, 2, 2]);
  return (
    <React.Fragment>
      <div className="dashboard-cards-container">
        {arr.map((item, index) => (
          <DashboardCard key={index}></DashboardCard>
        ))}
      </div>
    </React.Fragment>
  );
};

export default DashboardCards;
