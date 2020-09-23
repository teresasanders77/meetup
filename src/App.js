import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { WarningAlert } from './Alert';

import './App.css';

class App extends Component {

  state = {
    events: [],
    page: null,
    defaultCity: '',
    lat: null,
    lon: null,
    warningText: ''
  }

  componentDidMount() {
    this.updateEvents();
    window.addEventListener('online', this.warningAlert());
  }

  updateEvents = (lat, lon, page) => {
    if (!navigator.onLine) {
      this.setState({ warningText: "You are currently offline. Reconnect for updated, current results" });
    }
    else {
      this.setState({ warningText: "" })
    }
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(response => this.setState({ events: response, lat, lon }));
    }
    else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(response => this.setState({ events: response, page }));
    }
    else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(response => this.setState({ events: response }));
    }
  }

  render() {
    return (
      <div className="App" >
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.events.length} lat={this.state.lat} lon={this.state.lon} />
        <WarningAlert text={this.state.warningText} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
