import * as firebase from 'firebase/app';
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyANhgoDbFLysVmyfTRoYm3m9OXVg8YFUfA",
    authDomain: "sharenlearn-223d0.firebaseapp.com",
    databaseURL: "https://sharenlearn-223d0.firebaseio.com",
    projectId: "sharenlearn-223d0",
    storageBucket: "",
    messagingSenderId: "553032259019"
  }
};
