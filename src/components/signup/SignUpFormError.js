import React, { PropTypes } from 'react';

const SignUpFormError = ({message}) => {
    return (
        <div 
            className="alert alert-warning"
            role="alert">
            {message}
        </div>);
};

export default SignUpFormError;