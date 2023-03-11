import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
// css
import "./userdashboard.css";
// data
import { userDesktopNavData } from "../../utils/data";
// components
import Header from "../../components/header/header";
import UserDashboardHeaderInfo from "../../components/user-dashboard-header-info/user-dashboard-header-info";
import DesktopNav from "../../components/desktop-nav-link/desktop-nav-link";
import SearchComponent from "../../components/search-component/search";
import DashboardCards from "../../components/dashbord-card/dashboard-cards";
import Btn from "../../components/btn/btn";
const UserDashboard = () => {
  const { user } = useParams();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const showMobileNavHandler = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div>
      <Header
        event={showMobileNavHandler}
        navcontentSecondChildContainer={
          <DesktopNav desktopNavContent={userDesktopNavData} />
        }
        navcontentThirdChildContainer={<UserDashboardHeaderInfo user={user} />}
      />

      <div className="user-dashboard-body">
        <div className="body-search-container">
          <SearchComponent />
          <Btn
            color={"#fff"}
            BgColor={"green"}
            text="Create"
            to={`/${user}/new`}
          ></Btn>
        </div>
      </div>

      <div className="dashboard-card">
        <DashboardCards></DashboardCards>
      </div>
    </div>
  );
};
export default UserDashboard;
