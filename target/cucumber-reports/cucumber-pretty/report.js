$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PostComment.feature");
formatter.feature({
  "line": 1,
  "name": "To test the Post and Comments functionality of the UI application",
  "description": "",
  "id": "to-test-the-post-and-comments-functionality-of-the-ui-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "To perform the validations for the comments for the post made by a specific user",
  "description": "",
  "id": "to-test-the-post-and-comments-functionality-of-the-ui-application;to-perform-the-validations-for-the-comments-for-the-post-made-by-a-specific-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@success"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Post feature is available to the user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Searching the user \"Samantha\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Fetching the id of the user",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Searching the userId of the user mentioned",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Searching for the posts written by the user using userId",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Fetching the comments for each post and validating emails in the comment section",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinitions.featureIsAvailableToUser()"
});
formatter.result({
  "duration": 2786582700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha",
      "offset": 20
    }
  ],
  "location": "PostStepDefinitions.searchUser(String)"
});
formatter.result({
  "duration": 697972000,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.fetchUser()"
});
formatter.result({
  "duration": 462322200,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.getUserId()"
});
formatter.result({
  "duration": 709299700,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.searchPost()"
});
formatter.result({
  "duration": 1463492700,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.validateEmail()"
});
formatter.result({
  "duration": 8119904000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "As a user I want to make sure the API schema is correct for user service",
  "description": "",
  "id": "to-test-the-post-and-comments-functionality-of-the-ui-application;as-a-user-i-want-to-make-sure-the-api-schema-is-correct-for-user-service",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@schema"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Post feature is available to the user",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Searching the user \"Samantha\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "API schema for Users should be correct",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinitions.featureIsAvailableToUser()"
});
formatter.result({
  "duration": 340000500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha",
      "offset": 20
    }
  ],
  "location": "PostStepDefinitions.searchUser(String)"
});
formatter.result({
  "duration": 306354100,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.schemaForUsersShouldBeCorrect()"
});
formatter.result({
  "duration": 417979700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "As a user I want to make sure the API schema is correct for post service",
  "description": "",
  "id": "to-test-the-post-and-comments-functionality-of-the-ui-application;as-a-user-i-want-to-make-sure-the-api-schema-is-correct-for-post-service",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@schema"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Post feature is available to the user",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Searching the user \"Samantha\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Searching the userId of the user mentioned",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "API schema for Posts should be correct",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinitions.featureIsAvailableToUser()"
});
formatter.result({
  "duration": 360357500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha",
      "offset": 20
    }
  ],
  "location": "PostStepDefinitions.searchUser(String)"
});
formatter.result({
  "duration": 316013400,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.getUserId()"
});
formatter.result({
  "duration": 706005800,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.schemaForPostShouldBeCorrect()"
});
formatter.result({
  "duration": 3270200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "To perform the validations for the comments for the post made by a specific user",
  "description": "",
  "id": "to-test-the-post-and-comments-functionality-of-the-ui-application;to-perform-the-validations-for-the-comments-for-the-post-made-by-a-specific-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@schema"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Post feature is available to the user",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Searching the user \"Samantha\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Fetching the id of the user",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Searching the userId of the user mentioned",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Searching for the posts written by the user using userId",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Fetching the comments for each post and validating emails in the comment section",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "API schema for Comments should be correct",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinitions.featureIsAvailableToUser()"
});
formatter.result({
  "duration": 345965000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samantha",
      "offset": 20
    }
  ],
  "location": "PostStepDefinitions.searchUser(String)"
});
formatter.result({
  "duration": 334655700,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.fetchUser()"
});
formatter.result({
  "duration": 13328700,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.getUserId()"
});
formatter.result({
  "duration": 342535900,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.searchPost()"
});
formatter.result({
  "duration": 323308400,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.validateEmail()"
});
formatter.result({
  "duration": 3726751600,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.schemaForCommentsShouldBeCorrect()"
});
formatter.result({
  "duration": 1937800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "To perform the validation for invalid endpoint",
  "description": "",
  "id": "to-test-the-post-and-comments-functionality-of-the-ui-application;to-perform-the-validation-for-invalid-endpoint",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "Post feature is available to the user",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Searching the user with invalid endpoint",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinitions.featureIsAvailableToUser()"
});
formatter.result({
  "duration": 323366100,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.searchingTheUserWithInvalidEndpoint()"
});
formatter.result({
  "duration": 653383100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 19
    }
  ],
  "location": "PostStepDefinitions.theStatusCodeIs(int)"
});
formatter.result({
  "duration": 1700600,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "To perform the validation for searching user with invalid id",
  "description": "",
  "id": "to-test-the-post-and-comments-functionality-of-the-ui-application;to-perform-the-validation-for-searching-user-with-invalid-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Post feature is available to the user",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Searching the user with invalid id 345",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinitions.featureIsAvailableToUser()"
});
formatter.result({
  "duration": 312629500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "345",
      "offset": 35
    }
  ],
  "location": "PostStepDefinitions.searchingTheUserWithInvalidId(int)"
});
formatter.result({
  "duration": 774999900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 19
    }
  ],
  "location": "PostStepDefinitions.theStatusCodeIs(int)"
});
formatter.result({
  "duration": 480300,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "To perform the validation for searching post with invalid id",
  "description": "",
  "id": "to-test-the-post-and-comments-functionality-of-the-ui-application;to-perform-the-validation-for-searching-post-with-invalid-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "Post feature is available to the user",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "Searching the post with invalid id 1234",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinitions.featureIsAvailableToUser()"
});
formatter.result({
  "duration": 323307400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 35
    }
  ],
  "location": "PostStepDefinitions.searchingThePostWithInvalidId(int)"
});
formatter.result({
  "duration": 1041289100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 19
    }
  ],
  "location": "PostStepDefinitions.theStatusCodeIs(int)"
});
formatter.result({
  "duration": 1152900,
  "status": "passed"
});
});