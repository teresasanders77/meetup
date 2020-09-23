import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: "",
  };

  handleOnChange = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(null, null, value);

    if (value <= 0) {
      this.setState({
        errorText: 'Number should be at least 1',
      });
    } else {
      this.setState({
        errorText: '',
      });
    }
  }

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.errorText} />
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