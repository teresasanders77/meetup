import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumberOfEvents from '../NumberOfEvents';

configure({ adapter: new Adapter() });

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });
  test('render textbox element', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.numberOfEventsInput').prop('value')).toBe(numberOfEvents);
  });

  test('check default number of events', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEventsInput').prop('value')).toBe(32);
  });

  test('change state when input changes', () => {
    const eventObject = { target: { value: 24 } };
    NumberOfEventsWrapper.find('.numberOfEventsInput').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(24);
  });

  test('show number of events input label', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents label')).toHaveLength(1);
  });
});
