import React from 'react';
import './custom-button.styles.scss';

const CustomButton: React.FC<any> = ({children, isLoader, ...otherProps}) => (
  <button
    className={` ${
      isLoader ? 'loader' : ''
    } custom-button`}    
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
