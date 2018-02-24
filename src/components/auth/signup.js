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
                </fieldset>
                <fieldset className='form-group'>
                    <label>Password:</label>
                    <input className='form-control' {...password} type='password' />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Confirm Password:</label>
                    <input className='form-control' {...confirm_password} type='password' />
                </fieldset>
                <button action='submit' className='btn btn-primary'>Sign Up</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'confirm_password']
})(Signup);