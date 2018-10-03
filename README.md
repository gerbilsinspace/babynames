# Baby Name Discussion Tool

[![Greenkeeper badge](https://badges.greenkeeper.io/gerbilsinspace/babynames.svg)](https://greenkeeper.io/)

Because my Wife and I can't make a decision without an app.

## Prerequisites
- A Firebase account, and a project ready to go.
- Node 6 onwards. This may work earlier but is untested.

## To Install
- Clone the repository
- In your terminal, change directories to the root directory.
- run `npm install` to grab the latest dependencies

## To Run Locally

You will need your firebase app information, to pass to the app as flags. Switch out the placeholder keys for your own in the following run command.
`FIREBASE_API_KEY="yourApiKey" FIREBASE_AUTH_DOMAIN="yourAuthDomain" FIREBASE_DATABASE_URL="yourDatabaseUrl" FIREBASE_PROJECT_ID="yourBrojectId" FIREBASE_STORAGE_BUCKET="yourStorageBucket" FIREBASE_MESSAGING_SENDER_ID="YourMessagingSenderId" npm run start`

## To Deploy

I have had success using Netlify for deployment. There is an Open Source tier of hosting which is free, which integrates really smoothly with github. Create an account, hook it up with your github, and make sure any firebase related keys are added to the run command.