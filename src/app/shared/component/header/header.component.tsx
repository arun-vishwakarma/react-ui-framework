import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { setUserAuth } from '../../../sign-in/action/auth.action';

import { ReactComponent as Logo } from '../../../assets/images/logo.svg'


import './header.styles.scss';

const Header:React.FC<any> = ({ token, setUserAuth }) => (

  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      
      {token ? (
        <div className='option' onClick={() => setUserAuth(null) }>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      {/* <Link className='option' to='/signin'>
          Log IN
      </Link> */}
     
    </div>
  </div>
);


const mapStateToProps = (state:any) =>({
  token:state.auth.token
});

export default connect(
  mapStateToProps,
  {setUserAuth}
)(Header);

