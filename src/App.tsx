/**
 * App.tsx
 * Containing all required components 
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './app/assets/css/main.scss';

import SignInPage from './app/sign-in/sign-in.page';
import HomePage from './app/home/home.page';
import Header from './app/shared/component/header/header.component';


type Props = {
  currentUser:any,
  token:string
} 

class App extends React.Component<Props> {
  componentDidMount() {
    console.log('currentUser',this.props.currentUser);
  }

  render() {
    //console.log('app js',this.props);
    return (
      <div>
        <Header />
        <Switch>  
          <Route exact path='/' component={HomePage} />      
            <Route
              exact
              path='/signin'
              render={() =>
                this.props.token ? (
                  <Redirect to='/' />
                ) : (
                  <SignInPage />
                )
              }
            />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = (state:any) =>({
  currentUser:state.user.currentUser,
  token: state.auth.token
});

export default connect(
  mapStateToProps,
)(App);

