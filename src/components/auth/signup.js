import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
    handleFormSubmit(formProps) {
        // call the action creator to sign up the user
        this.props.signupUser(formProps);
        // we don't need to pass an object into 'signupUser' b/c all the formProps are already being passed into 'handleSubmit'
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className='alert alert-danger'>
                    {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit, fields: { email, password, confirm_password }} = this.props;
        
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className='form-group'>
                    <label>Email:</label>
                    <input className='form-control' {...email} />
                    {email.touched && email.error && <div className='error'>{email.error}</div>}
                </fieldset>
                <fieldset className='form-group'>
                    <label>Password:</label>
                    <input className='form-control' {...password} type='password' />
                    {password.touched && password.error && <div className='error'>{password.error}</div>}
                </fieldset>
                <fieldset className='form-group'>
                    <label>Confirm Password:</label>
                    <input className='form-control' {...confirm_password} type='password' />
                    {confirm_password.touched && confirm_password.error && <div className='error'>{confirm_password.error}</div>}
                </fieldset>
                {this.renderAlert()}
                <button action='submit' className='btn btn-primary'>Sign Up</button>
            </form>
            // the error messages are displaying on keydown
        );
    }
}

function validate(formProps) {
    // so formProps is logging whatever the user is typing
    const errors = {};

    if (!formProps.email) {
        errors.email = 'enter an email';
    }

    if (!formProps.password) {
        errors.password = 'enter a password';
    }

    if (!formProps.confirm_password) {
        errors.confirm_password = 'enter a password confirmation';
    }

    if (formProps.password !== formProps.confirm_password) {
        errors.password = 'passwords must match';
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    };
}

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'confirm_password'],
    validate
}, mapStateToProps, actions)(Signup);

// reminder: when we use the reduxForm helper, we need to pass in 'actions' as our third argument