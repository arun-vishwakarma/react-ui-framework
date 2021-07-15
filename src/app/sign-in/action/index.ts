import axios from 'axios';
import {API_BASE_URL} from './../../constant';
import {setUserAuth} from './auth.action';

import { authActionTypes } from './type';

export const setCurrentUser = (user: any) => ({
  type: authActionTypes.SET_CURRENT_USER,
  payload: user
});

export const userAuthStart = () => ({
  type: authActionTypes.USER_AUTH_START
});

export const userAuthSuccess = (authData: any) => ({
  type: authActionTypes.USER_AUTH_SUCCESS,
  payload: authData
});

export const userAuthFailuire = (errorMessage: string) => ({
  type: authActionTypes.USER_AUTH_FAILURE,
  payload: errorMessage
});


export const userAuthStartAsync = (formValues: any) => async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
  //dispatch({ type: authActionTypes.USER_AUTH_START });
  dispatch(userAuthStart());
  try {    
    const response = await axios.get(API_BASE_URL+'/todos/177'); //can use post method here
    console.log('response...',response);
    //dispatch({ type: authActionTypes.USER_AUTH_SUCCESS, payload: response.data });
    //dispatch(userAuthSuccess(response.data));
    dispatch(userAuthSuccess(formValues));
    dispatch(setUserAuth('tokenxyz123268hdsrgnjdi8838mdmsjsudstf446$33hd577cc'));
    //Auto sighn out
    setTimeout(()=>dispatch(setUserAuth(null)),60000); //auto logout after 1 min
  } catch(err) {
    //dispatch({ type: authActionTypes.USER_AUTH_FALIURE, payload: "AUTH FAILED!" });
    dispatch(userAuthFailuire(err.message));
  }  
};