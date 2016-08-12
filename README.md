## App Orchard


## Building

### Install
- clone this repo
- `cd` into it
- `npm install` to install dependencies

### Testing
- `npm test` to run jest unit tests
- `npm run cover` to generate code coverage
- mocha testing runs along with the app

### Production

- `echo $NODE_ENV` to see the environment you are using (__dev__ or __prod__)
- `NODE_ENV="prod"` to switch to production
- `npm start` to start the app

### Hot loading

- `NODE_ENV="dev"` to switch to development
- `gulp watch` to start the app
