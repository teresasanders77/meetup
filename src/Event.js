import React, { Component } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

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
    const event = this.props.event;
    const data = [{
      name: "Spots filled", value: event.yes_rsvp_count
    },
    {
      name: "Available spots", value: (event.rsvp_limit - event.yes_rsvp_count)
    }];
    const colors = ["#FF0000", "#008000"];

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
            {event.rsvp_limit &&
              <ResponsiveContainer height={150} width={250}>
                <PieChart>
                  <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={32} label>
                    {
                      data.map((entry, index) => (<Cell key={`cell-${index}`} fill={colors[index]} />))
                    }
                  </Pie>
                  <Legend iconSize={10} iconType="circle" layout="horizontal" verticalAlign="bottom" align="center" />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            }
            <p className="event__Details--description" dangerouslySetInnerHTML={{ __html: this.props.event.description }} />
          </div>}
      </div>
    );
  }
}

export default Event;