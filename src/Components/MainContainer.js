import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";
import ForecastChanger from "./ForecastChenge";
import HourlyWeather from "./HourlyWeather";
import DailyWeather from "./DailyWeather";

const apiKey = "o9lBstmk9UEdG3ALILUxlrVWaICF8C79";

class MainContainer extends Component {
  state = {
    search: "",
    data: null,
    location: "",
    variant: "currentconditions/v1/"
  };

  componentDidMount() {
    document.getElementById("button0").classList.add("active");
  }

  clearState() {
    this.setState({
      search: "",
      data: null,
      location: "",
      variant: "currentconditions/v1/"
    });
    document.getElementById("menu").style.cssText = "display: none";
  }

  inputHandler(event) {
    this.setState({ search: event.target.value });
  }

  getData() {
    document.querySelector(".loader").style.cssText = "display: block;";
    let url =
      "https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/" +
      this.state.variant +
      this.state.location.Key +
      "?apikey=" +
      apiKey +
      "&language=pl&metric=true";
    axios
      .get(url)
      .then(response => {
        let data = response.data;
        this.setState({ data: data });
        console.log(this.state.data);
        document.getElementById("menu").style.cssText = "display: inline-block";
        document.querySelector(".loader").style.cssText = "display: none;";
      })
      .catch(error => {
        alert(error);
        document.querySelector(".loader").style.cssText = "display: none;";
      });
  }

  getLocation() {
    document.querySelector(".loader").style.cssText = "display: block;";
    this.setState({ data: "", location: "" });
    let url =
      "https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com//locations/v1/search?apikey=" +
      apiKey +
      "&q=" +
      this.state.search +
      "&language=pl";

    axios
      .get(url)
      .then(res => {
        let location = res.data[0];
        this.setState({ location: location });
        this.getData();
      })
      .catch(err => {
        alert("Nie ma takiego miasta");
        document.querySelector(".loader").style.cssText = "display: none;";
      });
  }

  changeOption = option => {
    this.setState(
      {
        variant: option,
        data: null
      },
      () => {
        this.getData();
      }
    );
  };

  renderWeather = () => {
    if (this.state.data) {
      if (this.state.variant === "currentconditions/v1/") {
        return (
          <div>
            <CurrentWeather
              data={this.state.data}
              location={this.state.location}
            />
          </div>
        );
      } else if (this.state.variant === "forecasts/v1/hourly/12hour/") {
        return (
          <div>
            <HourlyWeather
              data={this.state.data}
              location={this.state.location}
            />
          </div>
        );
      } else if (this.state.variant === "forecasts/v1/daily/5day/") {
        return (
          <div>
            <DailyWeather
              data={this.state.data.DailyForecasts}
              location={this.state.location}
            />
          </div>
        );
      }
    }
  };

  render() {
    return (
      <div>
        <Logo clearState={() => this.clearState()} />
        <SearchBar
          search={this.state.search}
          inputChange={this.inputHandler.bind(this)}
          searchClick={this.getLocation.bind(this)}
        />
        <ForecastChanger changeOption={this.changeOption} />
        {this.renderWeather()}
        <div>
          <div className="loader" />
        </div>
      </div>
    );
  }
}

export default MainContainer;
