# Lambda-Node.js Microservice Boilerplate

A Node.js (v6.10) microservice boilerplate for Amazon Web Services (AWS) Lambda Function

## Features
- **CRUD**: Sample CRUD operations 
- **Swagger**: Exposing swagger documentation for the particular microservice in JSON format via API.
- **Testing**: Unit testing using Mocha and Chai
- **Code Coverage**: Check your code coverage using the istanbul library

## Pre-Requisites
* Node.js v6.10.x
* Mocha v3.1.x (Global installation '-g')
* Istanbul v0.4.x (Global installation '-g')

# Install dependencies
$ yarn install OR npm install

## Local Development
Start developing locally. Do a `node index` to ensure there is no compilation error before doing a pushing to remote git server.

### Testing
Write your test cases under the test folder. Ensure sufficient test cases are written.
```shell
# Make sure you have mocha installed globally
$ mocha test

# To check code coverage, make sure you have istanbul installed globally
$ istanbul cover _mocha
```

## Code Deployment
```shell
# For deploying microservices that are created by Automate 
$ git add .
$ git commit -m "Your commit message"
$ git push origin master
```