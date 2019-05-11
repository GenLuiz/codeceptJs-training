Feature: Github login
  In order to see my repository
  As a persona
  I want to be able to login in github

  Scenario: incorrect username/password
    Given Im at github page
    When I click on Sing in
    When I fill the fields with wrong password
    Then I should see an error message
