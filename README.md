# TinDev

TinDev is a Tinder for developers where you can find another developers with same experiencies as you and who knows start a new startup together?!

This project is based on OmniStack 8.0 Weekend and it has the backend, front-end and hybrid mobile application implementation using Node.js (express.js, mongoose, axios), React and React Native.

# Install and Run

To install dependencies and run the projects, follow the steps below:

## Backend (API)

Inside `./backend` folder create an environment file called `.env` as the sample below:

```
PORT={PORT_TO_RUN_THE_API} # default is 4000
MONGODB_CONNECTION={CONNECTION_STRING_TO_YOUR_MONGODB_INSTANCE}
```

Install dependencies and run the project:

```
$ yarn install
$ yarn dev
```