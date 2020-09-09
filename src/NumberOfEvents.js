import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  };

  handleOnChange = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          value={this.state.numberOfEvents}
          onChange={this.handleOnChange}
          className="numberOfEventsInput"
        />
      </div>
    );
  }
}

export default NumberOfEvents;