import React, { PropTypes } from 'react';

class WelcomePage extends React.Component
{
    constructor(props, context)
    {
        super(props, context);

        if (!this.props.location.state || !this.props.location.state.guest)
        {
            // TODO: A more robust way of ensuring state is set per component prior to constructing (state checking at the router?)
            this.context.router.replace('/');
        }
    }
    render() 
    {
        return (
            <div className="row fgcs_top_row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <div className="fgcs_content_greeting">
                        <h1>Welcome,</h1>
                        <h1><b>{this.props.location.state.guest.name}!</b></h1>
                    </div>
                    <p>You have been registered for this awesome service.<br />Please check your email listed below for instructions.</p>
                    <h3 className="fgcs_welcome_guest_email"><b>{this.props.location.state.guest.email}</b></h3>
                    <input
                        type="submit"
                        value="Sign In"
                        className="btn btn-primary pull-right"
                    />
                </div>
            </div>
        );
    }
}

export default WelcomePage;