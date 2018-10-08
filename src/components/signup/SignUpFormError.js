import React from 'react';

const SignUpFormError = ({message}) => {
    return (
        <small 
            className="form-text text-muted">
            {message}
        </small>);
};

export default SignUpFormError;