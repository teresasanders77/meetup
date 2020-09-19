import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, configure } from 'enzyme';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import NumberOfEvents from '../NumberOfEvents';

configure({ adapter: new Adapter() });

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test(': When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('user has not specified a number', () => {

    });
    let AppWrapper;
    when('the user is viewing the meetups', () => {
      AppWrapper = mount(<App />);
    });

    then('thirty-two events will be displayed', () => {
      AppWrapper.update();
      expect((AppWrapper.find('.Event')).length).toBeLessThanOrEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('user is viewing list of events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user changes the number of events they want to see', () => {
      const eventNumber = { target: { value: 10 } };
      AppWrapper.find('.numberOfEventsInput').simulate('change', eventNumber);
    });

    then('the amount of events they select will appear on the page', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(10);
    });
  });
});

