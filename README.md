# Social Media Application

A cross platform application that is capable of running on the web and mobile devices. It is built using the [ionic](https://ionicframework.com/) framework and 
supports compatibility with Android as well as iOS devices. It makes http request to the the following API's to retrive posts, comments and users data.

* [postsdata](https://jsonplaceholder.typicode.com/posts)
* [usersdata](https://jsonplaceholder.typicode.com/users/)
* [commentsdata](https://jsonplaceholder.typicode.com/posts/%7BpostId%7D/comments)

The following application presents a basic UI with details about ten posts at a time and an option to scroll to view further pages.
The following details of the post are displayed:

* Title of the post
* Content of the post
* Name of the publisher
* Company name of the publisher
* Total number of comments on the post

Shown below is a giphy of a working application in local development setup

![giphy](/src/assets/sma.gif)


### Local setup for development purposes

The following must be installed to run the app locally

* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com)
* [Ionic and Cordova](https://ionicframework.com/docs/angular/your-first-app)

Next, clone the repository and perform the following commands at the root of the directory

* npm install, followed by 
* ionic serve

The app will start serving in localhost port 8100. Redirect to the following url in the browser (localhost:8100/home) 

Note that the app was developed using 

* Node.js v12.7.0 
* npm 6.10.0
* ionic 5.2.6
* Angular v8 
