/**
 * environment setup for development, production, and etc..
 */
let env = process.env.REACT_APP_ENV;

let baseUrl = 'https://jsonplaceholder.typicode.com';
if(env==='prod'){
  baseUrl = 'https://jsonplaceholder.typicode.com/prod';
}

export const environment = {
  baseApiUrl: baseUrl,
  apiVersion:'v1',
  port:80
};