import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import App from '../App';

configure({ adapter: new Adapter() });

describe("<EventList /> component", () => {
  test("render correct number of events", () => {
    const EventListWrapper = shallow(
      <EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />
    );
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });

});