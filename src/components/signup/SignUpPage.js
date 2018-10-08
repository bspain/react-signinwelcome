import React from 'react';
import { Redirect } from 'react-router-dom';
import SignUpForm from './SignUpForm';

class SignUpPage extends React.Component
{
    constructor(props, context) {
        super(props, context);

        this.state = {
            guest: { name: '', email: '', password: ''},
            errors: { guestNameError: null, guestEmailError: null, guestPasswordError: null},
            submitEnabled: false,
            submitProcessed: false
        };

        this.signUpPageOnChange = this.signUpPageOnChange.bind(this);
        this.signUpPageOnSave = this.signUpPageOnSave.bind(this);
    }

    signUpPageOnChange(event) {
        let guest = this.state.guest;
        let errors  = this.state.errors;
        let submitEnabled = this.state.submitEnabled;

        switch(event.target.name)
        {
            case 'guestName':
                guest.name = event.target.value;
                break;
            case 'guestEmail':
                if (!event.target.value.includes('@')) // TODO: More robust email validation rules
                {
                    errors.guestEmailError = "Not a valid email address";
                }
                else
                {
                    errors.guestEmailError = null;
                }
                guest.email = event.target.value;

                break;
            case 'guestPassword':
                if (event.target.value.length < 6)
                {
                    errors.guestPasswordError = "Password must be greater then 6 characters.";
                }
                else
                {
                    errors.guestPasswordError = null;
                }
                guest.password = event.target.value;
                break;
            default: 
                break;
        }

        if (guest.name && guest.email && guest.password &&
            errors.guestNameError == null &&
            errors.guestEmailError == null &&
            errors.guestPasswordError == null)
        {
            submitEnabled = true;
        }
        else
        {
            submitEnabled = false;
        }

        this.setState(Object.assign(this.state, {guest, errors, submitEnabled}));
    }

    signUpPageOnSave(event) {
        event.preventDefault();
        this.setState(Object.assign(this.state, { submitProcessed: true }));
    }

    render() 
    {
        if (this.state.submitProcessed)
        {
            return (<Redirect to={{
                pathname: "/welcome",
                state: { guest: this.state.guest}
            }}/>)
        }

        return (
            <SignUpForm
                guest={this.state.guest}
                errors={this.state.errors}
                onSave={this.signUpPageOnSave}
                onChange={this.signUpPageOnChange}
                submitEnabled={this.state.submitEnabled}
            />
        );
    }
}

export default SignUpPage;