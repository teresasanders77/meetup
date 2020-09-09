import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import App from '../App';

configure({ adapter: new Adapter() });

describe('<App /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('render event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render only event overview', () => {
    expect(EventWrapper.find('.eventOverview')).toHaveLength(1);
  });

  test('render show/hide details button', () => {
    expect(EventWrapper.find('.eventOverview button')).toHaveLength(1);
  });

  test('click will render event details', () => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.find('.details-btn')
      .simulate('click');
    expect(EventWrapper.state('.showDetails')).toBe(true);
  });

});