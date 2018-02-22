import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
    handleFormSubmit({ email, password }) {
        console.log(email, password);
    }

    render() {
        const { handleSubmit, fields: { email, password } } = this.props;
        // reminder: handleSubmit is a helper that comes from redux-form
        // same with 'email' and 'password' (though we declared these two fields at the end of this file)

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className='form-group'>
                    <label>Email:</label>
                    <input {...email} className='form-control' />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Password:</label>
                    <input {...password} className='form-control' />
                </fieldset>
                <button action='submit' className='btn btn-primary'>Sign in</button>
            </form>  
        );
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);
// reminder: the 1st set of parenthesis is for config and the 2nd set of parenthesis is for the name of our component we want to export