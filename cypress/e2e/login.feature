Feature: Login
  As a registered user
  I want to be able to log in
  In order to access the product catalog

  Scenario: Successful login with standard credentials
    Given I open the login page
    When I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should see the products page

  Scenario Outline: Login fails with invalid credentials
    Given I open the login page
    When I enter username "<username>" and password "<password>"
    And I click the login button
    Then I should see an error message indicating "<error_message>"

    Examples:
      | username        | password      | error_message                                                             |
      | standard_user   | wrong_pass    | Epic sadface: Username and password do not match any user in this service |
      |                 | secret_sauce  | Epic sadface: Username is required                                        |
      | empty_password  |               | Epic sadface: Password is required                                        |
      |                 |               | Epic sadface: Username is required                                        |