$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("scenarios.feature");
formatter.feature({
  "line": 1,
  "name": "City National Bank scenarios",
  "description": "Description: The purpose of this feature is to test End 2 End integration.",
  "id": "city-national-bank-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Customer validates login information for different suites",
  "description": "",
  "id": "city-national-bank-scenarios;customer-validates-login-information-for-different-suites",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he taps on signIn page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "choose to login City National Online",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "validates City National Online login information",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "moves to Business Suite",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "choose to login into Business Suite",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "validates Business Suite login information",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "moves to Business Essentials",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "choose to login into Business Essentials",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "validates Business Essentials login information",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "chooses forgot UserID",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "enter forgot UserID details",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "chooses forgot password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "enter forgot password details",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "choose contact us",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "enter \"\u003ccustomer\u003e\" details on contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "browser close",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "city-national-bank-scenarios;customer-validates-login-information-for-different-suites;",
  "rows": [
    {
      "cells": [
        "customer"
      ],
      "line": 25,
      "id": "city-national-bank-scenarios;customer-validates-login-information-for-different-suites;;1"
    },
    {
      "cells": [
        "Hari"
      ],
      "line": 26,
      "id": "city-national-bank-scenarios;customer-validates-login-information-for-different-suites;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Customer validates login information for different suites",
  "description": "",
  "id": "city-national-bank-scenarios;customer-validates-login-information-for-different-suites;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he taps on signIn page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "choose to login City National Online",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "validates City National Online login information",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "moves to Business Suite",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "choose to login into Business Suite",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "validates Business Suite login information",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "moves to Business Essentials",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "choose to login into Business Essentials",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "validates Business Essentials login information",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "chooses forgot UserID",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "enter forgot UserID details",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "chooses forgot password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "enter forgot password details",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "choose contact us",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "enter \"Hari\" details on contact us page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "browser close",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 3914236738,
  "status": "passed"
});
formatter.match({
  "location": "CityNationalBankPageSteps.he_taps_on_signIn_page()"
});
formatter.result({
  "duration": 2397253599,
  "status": "passed"
});
formatter.match({
  "location": "CityNationalOnlinePageSteps.choose_to_login_City_National_Online()"
});
formatter.result({
  "duration": 1726129143,
  "status": "passed"
});
formatter.match({
  "location": "CityNationalOnlinePageSteps.validates_City_National_Online_login_information()"
});
formatter.result({
  "duration": 134051825,
  "status": "passed"
});
formatter.match({
  "location": "BusinessSuitePageSteps.moves_to_Business_Suite()"
});
formatter.result({
  "duration": 414637728,
  "status": "passed"
});
formatter.match({
  "location": "BusinessSuitePageSteps.choose_to_login_into_Business_Suite()"
});
formatter.result({
  "duration": 1157216530,
  "status": "passed"
});
formatter.match({
  "location": "BusinessSuitePageSteps.validates_Business_Suite_login_information()"
});
formatter.result({
  "duration": 428047325,
  "status": "passed"
});
formatter.match({
  "location": "BusinessEssentialsPageSteps.moves_to_Business_Essentials()"
});
formatter.result({
  "duration": 155162048,
  "status": "passed"
});
formatter.match({
  "location": "BusinessEssentialsPageSteps.choose_to_login_into_Business_Essentials()"
});
formatter.result({
  "duration": 265487320,
  "status": "passed"
});
formatter.match({
  "location": "BusinessEssentialsPageSteps.validates_Business_Essentials_login_information()"
});
formatter.result({
  "duration": 28273524,
  "status": "passed"
});
formatter.match({
  "location": "BusinessEssentialsPageSteps.chooses_forgot_UserID()"
});
formatter.result({
  "duration": 1480042446,
  "status": "passed"
});
formatter.match({
  "location": "ForgotUserIDPageSteps.enter_forgot_UserID_details()"
});
formatter.result({
  "duration": 2428115492,
  "status": "passed"
});
formatter.match({
  "location": "BusinessEssentialsPageSteps.chooses_forgot_password()"
});
formatter.result({
  "duration": 979077987,
  "status": "passed"
});
formatter.match({
  "location": "ForgotPasswordPageSteps.enter_forgot_password_details()"
});
formatter.result({
  "duration": 2353924617,
  "status": "passed"
});
formatter.match({
  "location": "BusinessEssentialsPageSteps.choose_contact_us()"
});
formatter.result({
  "duration": 545112819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hari",
      "offset": 7
    }
  ],
  "location": "ContactUsPageSteps.enter_details_on_contact_us_page(String)"
});
formatter.result({
  "duration": 6536898697,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.browser_close()"
});
formatter.result({
  "duration": 217675083,
  "status": "passed"
});
});