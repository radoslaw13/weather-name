import React, { Component } from "react";

class Clock extends Component {
  state = {
    time: ""
  };

  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  render() {
    return (
      <div className="clock-container">
        <div className="clock">
          <p className="clock-time">{this.state.time}</p>
        </div>
      </div>
    );
  }
}

export default Clock;
