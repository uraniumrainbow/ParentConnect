# ParentConnect - A Social media web application

## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)


## Introduction

An Social media web application build using Node js, Express js in the backend, MongoDb for database management and React.js to render User Interfaces.

## Demo

This is a Social media web application where users can post their pictures, view other people profiles, like post. 


![This is an image](/ParentConnect.png)
## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- NODE_ENV: Specify the enviroment as development of production

- PORT: Specify the port Number

- MONGO_URI: Specify the Mongodb URI to access the database


After you've set these environmental variables in the .env file at the server folder of the project, and install node modules using  `npm install` in both server and client folder. If this doesn't work, use `npm install --legacy-peer-deps`

Now you can run `npm run dev` in the terminal to run server and 'npm start' to run client and the application should work.

## Technology

The application is built with:

- Node.js 
- MongoDB
- Express.js
- JWT authentication and authorization
- MVC architecture
- React.js
- Redux and Redux toolkit for global state management
- Redux persist to store redux store in localstorage
- React router dom for client routes
- Material UI for user interfaces
- Base64 for image handling


## Features

The application displays different posts posted by users.

Users can do the following:


- Like/dislike post
- Edit a post
- Upload a post