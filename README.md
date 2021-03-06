# ![TinDev](./docs/logo.svg)

TinDev is a Tinder for developers where you can find another developers with same experiencies as you and who knows start a new startup together?!

This project is based on OmniStack 8.0 Weekend and it has the backend, frontend and  mobile application implementation using Node.js (express.js, mongoose, axios, socket.io), React and React Native.

In this project you can login with your GitHub username and like or dislike every developer from the database. If any of them likes you back a "It's a match" effect will pop up for both of you.

# Install and Run

To install dependencies and run the projects, follow the steps below:

## Backend (Node.JS API)

Inside `./backend` folder create an environment file called `.env` as the sample below:

```
PORT={PORT_TO_RUN_THE_API} # default is 3333
MONGODB_CONNECTION={CONNECTION_STRING_TO_YOUR_MONGODB_INSTANCE}
```

Install dependencies and run the project:

```
$ yarn install
$ yarn dev
```
## Frontend (React)

![Frontend](./docs/frontend-sample.gif)

To install dependencies and run the project go to `./frontend` folder and run:

```
$ yarn install
$ yarn start
```

\* Don't forget to run the `backend` project on port `3333` before you run this one. If you have changed the default port, don't forget to change the API base URL from `./frontend/src/services/api.js` as well.

## Mobile (React Native)

![Mobile](./docs/mobile-sample.gif)

To install dependencies and run the project in an Android smartphone go to `./mobile` folder and run:

```
$ yarn install
$ yarn react-native run-android
$ yarn start
```

\* Don't forget to run the `backend` project on port `3333` before you run this one. If you have changed the default port, don't forget to change the API base URL from `./mobile/src/services/api.js` as well.
