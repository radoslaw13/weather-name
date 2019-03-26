import React from "react";
import { dateFormat } from "../scripts/dateFormat";

function DailyWeather(props) {
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
      <div className="forecast-wrapper">
        {props.data.map((forecast, index) => {
          return (
            <div className="one-day-wrapper" key={index}>
              <div className="date-wrapper">
                {dateFormat(forecast.Date, true)}
              </div>
              <div className="temperature-wrapper">
                {forecast.Temperature.Maximum.Value}°C
              </div>
              <div className="icon-phrase">{forecast.Day.IconPhrase}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DailyWeather;
