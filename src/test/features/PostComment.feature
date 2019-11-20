Feature: To test the Post and Comments functionality of the UI application

  @success
  Scenario: To perform the validations for the comments for the post made by a specific user
    Given Post feature is available to the user
    Then Searching the user "Samantha"
    And Fetching the id of the user
    Then Searching the userId of the user mentioned
    Then Searching for the posts written by the user using userId
    And Fetching the comments for each post and validating emails in the comment section

  @schema
  Scenario: As a user I want to make sure the API schema is correct for user service
    Given Post feature is available to the user
    Then Searching the user "Samantha"
    Then API schema for Users should be correct

  @schema
  Scenario: As a user I want to make sure the API schema is correct for post service
    Given Post feature is available to the user
    Then Searching the user "Samantha"
    Then Searching the userId of the user mentioned
    Then API schema for Posts should be correct

  @schema
  Scenario: To perform the validations for the comments for the post made by a specific user
    Given Post feature is available to the user
    Then Searching the user "Samantha"
    And Fetching the id of the user
    Then Searching the userId of the user mentioned
    Then Searching for the posts written by the user using userId
    And Fetching the comments for each post and validating emails in the comment section
    Then API schema for Comments should be correct

  @error
  Scenario: To perform the validation for invalid endpoint
    Given Post feature is available to the user
    Then Searching the user with invalid endpoint
    Then the status code is 404

  @error
  Scenario: To perform the validation for searching user with invalid id
    Given Post feature is available to the user
    Then Searching the user with invalid id 345
    Then the status code is 404

  @error
  Scenario: To perform the validation for searching post with invalid id
    Given Post feature is available to the user
    Then Searching the post with invalid id 1234
    Then the status code is 404
