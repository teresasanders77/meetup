import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, configure } from 'enzyme';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('user has not clicked on event details', () => {

    });

    let AppWrapper;
    when('the user is viewing an event', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see the name of the event, but not the details', () => {
      expect(AppWrapper.find('.eventDetails')).toHaveLength(0);
    });
  });


  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;
    given('user is viewing an event', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on event details', () => {
      AppWrapper.update()
      AppWrapper.find('.details-btn').at(0).simulate('click')
    });

    then('the event element expands showing the details of said event', () => {
      expect(AppWrapper.find('.eventDetails')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details.', ({ given, and, when, then }) => {
    let AppWrapper;

    given('the user has clicked on event details', () => {
      AppWrapper = mount(<App />);
    });

    and('the event element is expanded', () => {
      AppWrapper.update()
      AppWrapper.find('.details-btn').at(0).simulate('click')
      expect(AppWrapper.find('.eventDetails')).toHaveLength(1);
    });

    when('the user clicks on hide details', () => {
      AppWrapper.find('.details-btn').at(0).simulate('click')
    });

    then('the details collapse, showing just the event', () => {
      expect(AppWrapper.find('.eventDetails')).toHaveLength(0);
    });
  });
});