Feature: SPECIFY NUMBER OF EVENTS

  Scenario: : When user hasn’t specified a number, 32 is the default number

    Given user has not specified a number
    When the user is viewing the meetups
    Then thirty-two events will be displayed


  Scenario: User can change the number of events they want to see
    Given user is viewing list of events
    When the user changes the number of events they want to see
    Then the amount of events they select will appear on the page
