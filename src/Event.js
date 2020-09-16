import React, { Component } from 'react';

class Event extends Component {
  state = {
    event: [],
    showDetails: false
  }

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    }
    else {
      this.setState({ showDetails: false });
    }
  }

  render() {
    const showDetails = this.state.showDetails;

    return (
      <div className="event">
        <div className="eventOverview">
          <p className="when">{this.props.event.local_time} - {this.props.event.local_date}</p>
          <p className="name">{this.props.event.name}</p>
          {this.props.event.group && this.props.event.group.name && (
            <p className="group">GROUP: {this.props.event.group.name}</p>
          )}
          <i className="attendees">{this.props.event.yes_rsvp_count} people are going</i>
          <button className="details-btn" onClick={() => this.handleShowDetails()}>details</button>
        </div>
        {showDetails &&
          <div className="eventDetails">
            <h3>Event Description: </h3>
            <p className="event__Details--description" dangerouslySetInnerHTML={{ __html: this.props.event.description }} />
          </div>}
      </div>
    );
  }
}

export default Event;