import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  };

  handleOnChange = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(null, null, value);
  }

  render() {
    return (
      <div className="numberOfEvents">
        <label># of events per page: </label>
        <input
          type="text"
          className="numberOfEventsInput"
          value={this.state.numberOfEvents}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;