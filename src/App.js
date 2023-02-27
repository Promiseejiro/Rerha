import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
//pages
import Homepage from "./Pages/homepage/homepage";
import SelectDesign from "./Pages/select-design/select-design";
import SignUpForm from "./Pages/login-form/login-form";
import AdminPage from "./Pages/admin-page/admin-page";
import PublicDesign from "./Pages/public-design/public-design";
import Header from "./components/header/header";
import PixoImage from "./components/pixo/pixo";

function App() {
  const [src, onChange] = useState("https://via.placeholder.com/350x150");
  const [loading, setIsLoading] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const showMobileNavHandler = () => {
    setShowMobileNav(!showMobileNav);
  };
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
      <Router>
        <Header event={showMobileNavHandler} />
        <Routes>
          <Route
            path="design/:designId"
            element={<PublicDesign showMobileNav={showMobileNav} />}
          ></Route>
          <Route
            path="/"
            element={<Homepage showMobileNav={showMobileNav}> </Homepage>}
          ></Route>
          <Route path="login" element={<SignUpForm />}></Route>
          <Route
            path="adminpage"
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
