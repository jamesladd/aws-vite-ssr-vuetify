# Vite SSR App with Vuetify rendered using AWS Lambda

This template demonstrates a Vite Server Side Rendered App with Vuetify being rendered using AWS Lambda, and served via Cloudfront.

The SSR Web application includes the use of Vuex and Client Side Routing using Vue Router.

## Getting Started

It is assumed you have an Amazon Web Services (AWS) account and have setup the credentials (.aws/config & .aws/credentials). 

Install required components
```
yarn install
```

Edit *env.yml* to reflect your requirements. For example the domain name.

Setup the domain
```
yarn create_domain
```
***Note** this process can take a while*

Deploy the Server Side Rendered (SSR) application
```
yarn deploy
```
