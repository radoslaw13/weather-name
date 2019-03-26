import React from "react";
import { dateFormat } from "../scripts/dateFormat";

function CurrentWeather(props) {
  return (
    <div className="weather-container">
      <div className="city-name-wrapper">
        <h1 className="city-name">{props.location.LocalizedName}</h1>
      </div>
      <div className="country-name-wrapper">
        <h3 className="country-name">
          {props.location.AdministrativeArea.LocalizedName +
            ", " +
            props.location.Country.LocalizedName}
        </h3>
      </div>
      <div className="weather-info-container">
        <div className="weather-info">
          <div className="temperature">
            {props.data[0].Temperature.Metric.Value}°C
          </div>
          <div className="weather-text">{props.data[0].WeatherText}</div>
        </div>
        <div className="weather-icon">
          <img
            src={require("../Images/Icons/" +
              props.data[0].WeatherIcon +
              ".png")}
            alt="icon"
            className="icon"
          />
        </div>
        <div className="date">
          {dateFormat(props.data[0].LocalObservationDateTime)}
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
