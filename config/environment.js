/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'py-hack-vol01',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    // config/environment.js
    firebase: {
      apiKey: "AIzaSyAmfUVzLkREXl_E7OnFHVP0EegidyxU1_4",
      authDomain: "py-hack.firebaseapp.com",
      databaseURL: "https://py-hack.firebaseio.com",
      storageBucket: "py-hack.appspot.com"
    },


    // if using ember-cli-content-security-policy
   // contentSecurityPolicy: {
 //     'script-src': "'self' 'unsafe-eval' apis.google.com",
  //    'frame-src': "'self' https://*.firebaseapp.com",
  //    'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
  //  },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
