import { authActionTypes } from '../action/type';

const INITIAL_STATE = {
  currentUser: null,
  isFetching: false,
  errorMessage: undefined
};

const signInReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case authActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case authActionTypes.USER_AUTH_START:
      return {
        ...state,
        isFetching: true  //no need to use action object here bcoz it will always true for loader....
      };
    case authActionTypes.USER_AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload
      };
    case authActionTypes.USER_AUTH_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage:action.payload
      };
    default:
      return state;
  }
};

export default signInReducer;
