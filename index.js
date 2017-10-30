"use strict";

// Declare all the libraries you need over here
const request = require('request'); //Request library is used for making http calls
const swaggerJSDoc = require('swagger-jsdoc'); //Swagger library for creating swagger files
const config = require('./config.json');

// Main Function
exports.handler = (event, context, callback) => {
    try {
        // Operation is mapped to AWS API Gateway
        const operation = event.operation;
        switch (operation) {
            case "getAll":
                getAll(event, callback);
                break;
            case "getOne":
                getOne(event, callback);
                break;
            case "createOne":
                createOne(event, callback);
                break;
            case "updateOne":
                updateOne(event, callback);
                break;
            case "deleteOne":
                deleteOne(event, callback);
                break;
            case "createSwagger":
                createSwagger(event, callback);
                break;
            default:
                return callback(JSON.stringify(handleError('API Gateway', 400, 'Invalid Operation')));
        }
    } catch (e) {
        console.log(e)
        return callback(JSON.stringify(handleError('API Gateway', 500, e.message)));
    }
}

//Default GET method to retrieve all items
const getAll = (event, callback) => {

	//Variables
	let toReturn = {
		message : "Code some business logic."
	}

	//Example of error handler
	/* 
	if(err){
		return callback(JSON.stringify(handleError('API Gateway', 500, err.message)));
	}
	*/

	//Return
	return callback(null, toReturn);
}

//Default GET method to retrieve an item based on ID
const getOne = (event, callback) => {

	//Variables
	const id = event.id //Item ID
	let toReturn = {
		message : "This is the getOne function for " + id
	}

	//Example of error handler
	/* 
	if(err){
		return callback(JSON.stringify(handleError('API Gateway', 500, err.message)));
	}
	*/

	//Return
	return callback(null, toReturn);
}

//Default POST method to create an item
const createOne = (event, callback) => {

	//Variables
	const item = event.body //Item to be created
	let toReturn = {
		message : "This is the createOne function to create an item"
	}

	//Example of error handler
	/* 
	if(err){
		return callback(JSON.stringify(handleError('API Gateway', 500, err.message)));
	}
	*/

	//Return
	return callback(null, toReturn);
}

//Default PUT method to update an item based on ID
const updateOne = (event, callback) => {

	//Variables
	const id = event.id //Item ID
	const item = event.body //Item to be created
	let toReturn = {
		message : "This is the updateOne function to update item " + id
	}

	//Example of error handler
	/* 
	if(err){
		return callback(JSON.stringify(handleError('API Gateway', 500, err.message)));
	}
	*/

	//Return
	return callback(null, toReturn);
}

//Default DELETE method to delete an item based on ID
const deleteOne = (event, callback) => {

	//Variables
	const id = event.id //Item ID
	let toReturn = {
		message : "This is the deleteOne function to delete item " + id
	}

	//Example of error handler
	/* 
	if(err){
		return callback(JSON.stringify(handleError('API Gateway', 500, err.message)));
	}
	*/

	//Return
	return callback(null, toReturn);
}

//Error Handler function
const handleError = (source, code, message) => {
  const errorResponse = {
    error: {
      code,
      source,
      message,
    },
  };
  return errorResponse;
}

//Swagger creation function
const createSwagger = (event, callback) => {

	const options = {
		swaggerDefinition: {
			info: {
			  title: 'Lambda Template', // Title (required) 
			  version: '1.0.0', // Version (required) 
			},
		},
		apis: ['./index.js'], // Path to the API docs 
	};
	 
	// Initialize swagger-jsdoc -> returns validated swagger spec in json format 
	let swaggerSpec = swaggerJSDoc(options)
	console.log(swaggerSpec);
	callback(null, swaggerSpec);

}

/**
* @swagger
* definitions:
*   User:
*     type: object
*     required:
*       - username
*       - password
*     properties:
*       username:
*         type: string
*       password:
*         type: string
*         format: password
*   Message:
*     type: string
*
* /users:
*   get:
*     description: Returns users
*     produces:
*      - application/json
*     responses:
*       200:
*         description: users
*         schema:
*           type: array
*           items:
*             $ref: '#/definitions/User'
*   post:
*     description: Returns users
*     produces:
*       - application/json
*     parameters:
*       - name: user
*         description: User object
*         in:  body
*         required: true
*         schema:
*           $ref: '#/definitions/User'
*     responses:
*       200:
*         description: user
*         schema:
*           $ref: '#/definitions/User'
* /users/{id}:
*   get:
*     description: Returns a user base on ID
*     produces:
*      - application/json
*     parameters:
*       - name: id
*         description: User ID
*         in:  path
*         required: true
*         type: string
*     responses:
*       200:
*         description: Get one user
*         schema:
*           $ref: '#/definitions/User'
*   put:
*     description: Update user based on ID
*     produces:
*       - application/json
*     parameters:
*       - name: id
*         description: User ID
*         in:  path
*         required: true
*         type: string
*       - name: user
*         description: User object
*         in:  body
*         required: true
*         schema:
*           $ref: '#/definitions/User'
*     responses:
*       200:
*         description: users
*         schema:
*           $ref: '#/definitions/User'
*   delete:
*     description: Delete user based on ID
*     produces:
*      - application/json
*     parameters:
*       - name: id
*         description: User ID
*         in:  path
*         required: true
*         type: string
*     responses:
*       200:
*         description: Success message
*         schema:
*           $ref: '#/definitions/Message'
*/
