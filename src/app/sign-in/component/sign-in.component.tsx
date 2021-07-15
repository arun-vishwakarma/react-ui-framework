import React from 'react';
import {connect} from 'react-redux';
import { Spinner } from 'react-bootstrap';

import { userAuthStartAsync } from '../action';

import FormInput from '../../shared/component/form-input/form-input.component';
import CustomButton from '../../shared/component/custom-button/custom-button.component';
import { State, Props, UserStateI } from './prop-types';


import './sign-in.styles.scss';


class SignIn extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount(){
    console.log('this.props on sign in componet', this.props);   
  }

  //Submit login form 
  handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    const { email, password } = this.state;
    console.log('email,password',email,password);
    if(email && password){
      //called redux user action
      this.props.userAuthStartAsync({email, password});
    }  
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value, name } : { value: string; name: string } = e.target as HTMLTextAreaElement;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit' isLoader={this.props.isFetching} disabled={this.props.isFetching}>SIGN IN </CustomButton>
          
            {this.props.isFetching ? <Spinner animation="border" /> : '' }
                      
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps =  (state: UserStateI) => {
    const {currentUser, isFetching} = state.user;
    return {     
        currentUser,
        isFetching
        //token: state.auth.token
      };
}


export default connect(
  mapStateToProps,
  {userAuthStartAsync}
)(SignIn);
