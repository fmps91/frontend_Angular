// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { database } from 'firebase';

export const environment = {
  production: false,
  //base: 'http://3.128.197.124:8090/api/v1/',
  //base: 'http://localhost:8090/api/v1/',
  //base: 'http://192.168.99.100:8090/api/v1/',
  base: 'http://10.5.0.6:8090/api/v1/',
  
  port: '',
  ancho: 0,
  alto: 0,
  session: false,
  init: true,
  superuser: "admin@sgd.com",
  superpassword: "admin",

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
