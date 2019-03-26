import React from "react";
import Clock from "./Clock";
import logo from "../Images/logo.png";

function Logo(props) {
  return (
    <div className="logo-container">
      <div className="logo" onClick={props.clearState}>
        <img className="logo-image" src={logo} alt="logo" />
        <div className="title-container">
          <h1 className="app-title">MojaPogoda</h1>
          <p className="app-subtitle">Najelpsza aplikacja pogodowa</p>
        </div>
      </div>
      <Clock />
    </div>
  );
}

export default Logo;
