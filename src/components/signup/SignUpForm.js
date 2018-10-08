import React from 'react';
import SignUpFormError from './SignUpFormError';

const SignUpForm = ({guest, errors, onSave, onChange, submitEnabled}) => {
    return (
        <div className="row fgcs_top_row">
            <div className="col-sm-2"></div>
            <form className="col-sm-8">
                <div className="fgcs_content_greeting">
                    <h1>Let's</h1>
                    <h1><b>Sign Up</b></h1>
                </div>
                <p>Use the form below to sign up for this super awesome service.  You're only a few steps away!</p>
                <div className="form-group">
                    <div className="field">
                        <input
                            type="text"
                            name="guestName"
                            aria-label="first name"
                            autoComplete="name"
                            className={`form-control ${errorClass(errors.guestNameError)}`}
                            placeholder="First Name"
                            value={guest.name}
                            onChange={onChange}/>
                    </div>
                    {errors.guestNameError &&
                        <SignUpFormError message={errors.guestNameError} />
                    }  
                </div>
                <div className="form-group">
                    <div className="field">
                        <input
                            type="email"
                            name="guestEmail"
                            aria-label="email address"
                            autoComplete="email"
                            className={`form-control ${errorClass(errors.guestEmailError)}`}
                            placeholder="Email Address"
                            value={guest.email}
                            onChange={onChange}/>
                    </div>
                    {errors.guestEmailError &&
                        <SignUpFormError message={errors.guestEmailError} />
                    }  
                </div>
                <div className="form-group">
                    <div className="field">
                        <input
                            type="password"
                            name="guestPassword"
                            aria-label="password"
                            autoComplete="new-password"
                            className={`form-control ${errorClass(errors.guestPasswordError)}`}
                            placeholder="Password"
                            value={guest.password}
                            onChange={onChange}/>
                    </div>
                    {errors.guestPasswordError &&
                        <SignUpFormError message={errors.guestPasswordError} />
                    }  
                </div>
                <input
                    type="submit"
                    value="Sign Up"
                    aria-label="sign up"
                    disabled={!submitEnabled}
                    className="btn btn-primary float-right"
                    onClick={onSave} />
            </form>
        </div>
    );
};

function errorClass(error)
{
    return (error && error.length > 0) ? 'is-invalid' : '';
}

export default SignUpForm;