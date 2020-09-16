import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';


configure({ adapter: new Adapter() });

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    const event = {
      created: 1563825339000,
      duration: 9000000,
      id: "263370107",
      name: "Microservices mit dem MicroProfile 3.x",
      rsvp_limit: 80,
      date_in_series_pattern: false,
      status: "upcoming",
      time: 1566925200000,
      local_date: "2019-08-27",
      local_time: "19:00",
      updated: 1563825339000,
      utc_offset: 7200000,
      waitlist_count: 79,
      yes_rsvp_count: 80,
      venue: {
        id: 26266792,
        name: "adesso AG",
        lat: 53.54524230957031,
        lon: 9.950983047485352,
        repinned: false,
        address_1: "Große Elbstraße 36",
        city: "Hamburg",
        country: "de",
        localized_country_name: "Deutschland"
      },
      group: {
        created: 1387402147000,
        name: "Java User Group Hamburg",
        id: 11500362,
        join_mode: "open",
        lat: 53.54999923706055,
        lon: 10,
        urlname: "jug-hamburg",
        who: "Mitglieder",
        localized_location: "Hamburg, Deutschland",
        state: "",
        country: "de",
        region: "de_DE",
        timezone: "Europe/Berlin"
      },
      link: "https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",
      description: "<p>Wer Microservices in Java entwickeln möchte, muss nicht zwangsläufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verfügbar sind und bezüglich ihrer Funktionalität stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) für die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu zählen die Unterstützung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. Für den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gewählt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte für Enterprise Java und Systemintegration unterstützt er seine Kunden überwiegend durch Entwicklung, Reviews oder die Durchführung von Schulungen. Thilo ist (Co-)Autor mehrerer Bücher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelmäßig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ",
      visibility: "public",
      member_pay_fee: false
    }
    EventWrapper = shallow(<Event event={event} />);
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
    expect(EventWrapper.state('event').name).toBe('Pitch Night');
  });
});