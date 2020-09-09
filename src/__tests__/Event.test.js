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

  test('render event overview only ', () => {
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
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('click will hide event details', () => {
    EventWrapper.setState({
      showDetails: true,
    });
    EventWrapper.find('.details-btn')
      .simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('set mock eventdata as state', () => {
    EventWrapper.setState({
      event: {
        created: 1518552433000,
        duration: 5400000,
        id: "gfmkjpybcnbmc",
        name: "Pitch Night",
        rsvp_limit: 80,
        date_in_series_pattern: false,
        status: "upcoming",
        time: 1604014200000,
        local_date: "2020-10-29",
        local_time: "17:30",
        updated: 1518552433000,
        utc_offset: -21600000,
        waitlist_count: 0,
        yes_rsvp_count: 2,
        venue: {
          id: 20883112,
          name: "Epicentral Coworking",
          lat: 38.84013748168945,
          lon: -104.8226318359375,
          repinned: false,
          address_1: "415 N. Tejon",
          city: "Colorado Springs",
          country: "us",
          localized_country_name: "USA",
          zip: "",
          state: "CO"
        },
        is_online_event: false,
        group: {
          created: 1310500573000,
          name: "Peak Startup",
          id: 2162701,
          join_mode: "open",
          lat: 38.83000183105469,
          lon: -104.81999969482422,
          urlname: "peakstartup",
          who: "Innovators",
          localized_location: "Colorado Springs, CO",
          state: "CO",
          country: "us",
          region: "en_US",
          timezone: "US/Mountain"
        },
        link: "https://www.meetup.com/peakstartup/events/gfmkjpybcnbmc/",
        description: "Pitch Night provides startup organizations an opportunity to practice their 5-minute pitch and receive feedback from the audience. Come meet your fellow startup community, see a pitch firsthand, and offer your valuable insights.</p> <p>Program begins at 5:45 PM.</p> <p>Free beer and pizza! Always a great time!</p> <p>To register for the event, or if you're interested in applying to pitch, please complete the appropriate forms here. Indicating that you are going on Meetup does not meet the registration requirement. Beat the line at check-in by completing registration before the day of the event.</p> <p>For more info on upcoming happenings or to get involved, check out the Peak Startup website and our facebook page.",
        visibility: "public",
        member_pay_fee: false
      }
    });
    console.log(EventWrapper.state('event'));
    expect(EventWrapper.state('event').name).toBe('Pitch Night');
  });
});