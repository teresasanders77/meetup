import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumberOfEvents from '../NumberOfEvents';

configure({ adapter: new Adapter() });

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render textbox element', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render text input correctly', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEventsInput')).toHaveLength(1);
  });

  test('check default number of events', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEventsInput').prop('value')).toBe(32);
  });

  test('change state when input changes', () => {
    NumberOfEventsWrapper.find('.numberOfEventsInput').simulate('change', {
      target: { value: 12 },
    });

    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(12);
  });

  test('show number of events input label', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents label')).toHaveLength(1);
  });

});