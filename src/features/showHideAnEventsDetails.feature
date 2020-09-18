Feature: SHOW/HIDE AN EVENT'S DETAILS

  Scenario: An event element is collapsed by default

    Given user has not clicked on event details
    When the user is viewing an event
    Then the user should see the name of the event, but not the details

  Scenario: User can expand an event to see its details
    Given user is viewing an event
    When the user clicks on event details
    Then the event element expands showing the details of said event


  Scenario: User can collapse an event to hide its details.

    Given the user has clicked on event details
      And the event element is expanded
    When the user clicks on hide details
    Then the details collapse, showing just the event