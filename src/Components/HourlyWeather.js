import React from "react";
import { getHourFromDate, dateFormat } from "../scripts/dateFormat";

function HourlyWeather(props) {
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
      <div className="date-wrapper">
        {dateFormat(props.data[0].DateTime, true)}
      </div>
      <div className="forecast-wrapper">
        {props.data.map((forecast, index) => {
          return (
            <div className="one-forecast-wrapper" key={index}>
              <div className="hour-wrapper">
                {getHourFromDate(forecast.DateTime)}
              </div>
              <div className="temperature-wrapper">
                {forecast.Temperature.Value}°C
              </div>
              <div className="icon-phrase">{forecast.IconPhrase}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HourlyWeather;
