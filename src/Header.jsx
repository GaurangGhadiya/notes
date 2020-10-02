import React from "react";
import logo from "./Images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" height="60" width="70" />
        &nbsp;&nbsp;&nbsp;
        <h1> Notes</h1>
      </div>
    </>
  );
};

export default Header;
