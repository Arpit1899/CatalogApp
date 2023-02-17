# Materials Web App (React)
 
This is a web application that allows users to create a list of items with details such as name, volume, cost, color, and total cost. Users can also edit and delete existing items in the list.

## Technologies Used
React: front-end JavaScript library

Node.js: back-end JavaScript runtime environment

Express: web application framework for Node.js

## Getting Started
To get started with this project, follow these steps:

Clone the repository to your local machine 


Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install packages and modules.

```bash
cd materials
npm install
npm start
```
This will start a local development server for the App
## Usage

Once you have the development server running, you can access the web application in your browser at http://localhost:3001. 

From there, you can create, edit, and delete items in the list.

## Interacting with the Server

To interact with the server: 

```bash
cd server
node server.js
http://localhost:3001
```
When you are done adding materials, click the "Submit" button to send the data to the API. This will create a data.json file in the local path of the server, containing all of the material data in JSON format. 

## Interacting with the App

To Add items: 

1. Input values in all the fields
2. Click Add button

To Delete item: 

1. Click on the Item
2. Click Delete button 

To Edit item: 

1. Click on the item to be edited, this will populate the input panel with all the values of that item
2. After you are done editing, click Add button

## Unit Tests
Find the unit tests in:
```bash
/materials/src/tests/
```
