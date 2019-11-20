Framework Design:
I have built a BDD framework to automate the rest services which are built for the application.

Technologies:
Language: Java
Built With: Maven
REST Assured
TestNG
Cucumber

SetUp:
To run this project, import the project and download the dependencies mentioned in the pom.xml file of the Project

Running the tests:
run all: tests
        mvn test

with tags:
        mvn test -Dcucumber.options="--tags @success"
tags : @success, @schema


Where to check reports:
Reports will be generated on below path 
RestCarTask/target/cucumber-reports/cucumber-jvm-reports/cucumber-html-reports/
* overview-features.html

Where to check logs:
The logs are logged under log folder at below path
src\test\log

Found below observation while testing the api:
Observations:
1. Call does’t fails when username or any input value is given wrong and it returns empty response
2. Protocol used is https ,Currently it works with both http and https 
