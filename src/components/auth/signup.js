import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
    render() {
        const { handleSubmit, fields: { email, password, confirm_password }} = this.props;
        
        return (
            <form>
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

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'confirm_password'],
    validate
})(Signup);