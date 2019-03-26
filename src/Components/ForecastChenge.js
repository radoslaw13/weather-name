import React from "react";

function ForecastChanger(props) {
  let options = [
    { label: "Dzisiaj", link: "currentconditions/v1/" },
    { label: "12 godzin", link: "forecasts/v1/hourly/12hour/" },
    { label: "5 dni", link: "forecasts/v1/daily/5day/" }
  ];

  return (
    <div className="menu-container forecast-changer" id="menu">
      {options.map((obj, index) => {
        return (
          <div
            className="forecast-button"
            id={`button${index}`}
            key={obj.label}
            onClick={() => {
              props.changeOption(obj.link);
              document.querySelectorAll(".forecast-button").forEach(el => {
                el.className = "forecast-button";
              });
              document.getElementById(`button${index}`).classList.add("active");
            }}
          >
            <p>{obj.label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ForecastChanger;
