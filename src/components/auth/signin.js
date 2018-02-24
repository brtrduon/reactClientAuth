import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
    handleFormSubmit({ email, password }) {
        console.log(email, password);
        this.props.signinUser({ email, password });
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
                    <input {...password} type='password' className='form-control' />
                </fieldset>
                {this.renderAlert()}
                <button action='submit' className='btn btn-primary'>Sign in</button>
            </form>  
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    };
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
// reminder: the 1st set of parenthesis is for config and the 2nd set of parenthesis is for the name of our component we want to export