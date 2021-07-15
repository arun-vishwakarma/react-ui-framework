import { authActionTypes } from '../action/type';

const INITIAL_STATE = {
  token: null
};

const authReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case authActionTypes.SET_USER_AUTH:
      return {
        ...state,
        token: action.payload
      };    
    default:
      return state;
  }
};

export default authReducer;
