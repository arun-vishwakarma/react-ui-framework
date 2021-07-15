import { authActionTypes } from './type';

export const setUserAuth = (token: any) => ({
  type: authActionTypes.SET_USER_AUTH,
  payload: token
});
