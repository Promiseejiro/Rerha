import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
//pages
import Homepage from "./Pages/homepage/homepage";
import SelectDesign from "./Pages/select-design/select-design";
import SignInForm from "./Pages/login-form/login-form";
import SignUpForm from "./Pages/sign-up-page/sign-up-page";
import AdminPage from "./Pages/admin-page/admin-page";
import PublicDesign from "./Pages/public-design/public-design";
import PixoImage from "./components/pixo/pixo";
import UserDashboard from "./Pages/userDashboard/userdassboard";
import Footer from "./components/footer/footer";

function App() {
  const [src, onChange] = useState("https://via.placeholder.com/350x150");
  const [loading, setIsLoading] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);
  // const showMobileNavHandler = () => {
  //   setShowMobileNav(!showMobileNav);
  // };
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
      <Router>
        {/* <Header event={showMobileNavHandler} /> */}
        <Routes>
          <Route
            path="design/:designId"
            element={<PublicDesign showMobileNav={showMobileNav} />}
          ></Route>
          <Route
            path="design"
            element={<PublicDesign showMobileNav={showMobileNav} />}
          ></Route>
          <Route
            path="/"
            element={<Homepage showMobileNav={showMobileNav}> </Homepage>}
          ></Route>
          <Route path="login" element={<SignInForm />}></Route>
          <Route path="sign-up" element={<SignUpForm />}></Route>
          <Route
            path="/:user/new"
            element={<AdminPage showMobileNav={showMobileNav}></AdminPage>}
          ></Route>
          <Route
            path="pixo"
            element={<PixoImage src={src} onChange={onChange} />}
          ></Route>
          <Route
            path="select"
            element={<SelectDesign showMobileNav={showMobileNav} />}
          ></Route>
          <Route path="/:user" element={<UserDashboard />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
