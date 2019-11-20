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
  "duration": 3133026000,
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
  "duration": 369111100,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.fetchUser()"
});
formatter.result({
  "duration": 387361001,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.getUserId()"
});
formatter.result({
  "duration": 385041800,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.searchPost()"
});
formatter.result({
  "duration": 342180501,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.validateEmail()"
});
formatter.result({
  "duration": 3729115800,
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
  "duration": 348250800,
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
  "duration": 318656100,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.schemaForUsersShouldBeCorrect()"
});
formatter.result({
  "duration": 198078500,
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
  "duration": 314464500,
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
  "duration": 310459100,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.getUserId()"
});
formatter.result({
  "duration": 341584201,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.schemaForPostShouldBeCorrect()"
});
formatter.result({
  "duration": 3192699,
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
  "duration": 311956499,
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
  "duration": 315443401,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.fetchUser()"
});
formatter.result({
  "duration": 11616000,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.getUserId()"
});
formatter.result({
  "duration": 313110100,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.searchPost()"
});
formatter.result({
  "duration": 309481400,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.validateEmail()"
});
formatter.result({
  "duration": 3549987300,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.schemaForCommentsShouldBeCorrect()"
});
formatter.result({
  "duration": 12036900,
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
  "duration": 284826400,
  "status": "passed"
});
formatter.match({
  "location": "PostStepDefinitions.searchingTheUserWithInvalidEndpoint()"
});
formatter.result({
  "duration": 300553300,
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
  "duration": 2678699,
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
  "duration": 307487900,
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
  "duration": 301968699,
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
  "duration": 733800,
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
  "duration": 304011599,
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
  "duration": 330507900,
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
  "duration": 1035399,
  "status": "passed"
});
});