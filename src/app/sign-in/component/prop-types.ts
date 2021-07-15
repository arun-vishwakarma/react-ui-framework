export type State = {
    email?: string;
    password?:string;
  }
export type Props = {
    userAuthStartAsync:(data: State)=>{},
    isFetching:boolean
  }
  type UserState = {
    currentUser: boolean,
    isFetching:boolean,
    errorMessage:string
  }
  /* type authSate = {
      token:string
  } */
export interface UserStateI {
    user: UserState,
    //auth: authSate
  }