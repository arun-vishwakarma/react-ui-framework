import {environment} from '../environment'

const baseApiUrl = environment.baseApiUrl;
//const apiVersion = environment.apiVersion;

// Base Url
export const API_BASE_URL = baseApiUrl;
//export const baseUrl = `${baseApiUrl}${apiVersion}`;


// API Call end points
export const END_POINTS = {
    loginUrls: {
        token: '/token',
        logout: '/logout',
    }
}

//Constant text
export const HOME_PAGE = 'HOME PAGE';