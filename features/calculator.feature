Feature: Calculator Basic Operations
  As a user
  I want to perform basic arithmetic operations
  So that I can verify calculator functionality

  Scenario: Addition of two numbers
    Given I open the Calculator app
    When I add 9 and 8
    Then the result should be "17"

  Scenario: Subtraction of two numbers
    Given I open the Calculator app
    When I subtract 9 and 8
    Then the result should be "1"

  Scenario: Multiplication of two numbers
    Given I open the Calculator app
    When I multiply 9 and 8
    Then the result should be "72"
