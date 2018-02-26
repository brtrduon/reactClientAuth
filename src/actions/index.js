import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

const ROOT_URL = 'http://localhost:8000';

export function signinUser({ email, password}) {
    return function(dispatch) {
        // we need to install reduxThunk in order to return a function where we can arbitrarily access everything being passed into a function that's being returned(?)
        // in this case, reduxThunk apparently allows us to dispatch as many actions at any time we want

        // the dispatch function in redux accepts an action and forwards the action to all reducers we have in our app


        // submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password }) 
            .then(response => {
                // if request is good:
                // -update state to indicate user is authenticated
                dispatch({ type: AUTH_USER });
                // -save the JWT token
                localStorage.setItem('token', response.data.token);
                // localStorage is a "storage" for one single web browser. Does not get cleared when user clicks on refresh button, close window, etc.

                // -redirect to the route '/feature'
                browserHistory.push('/feature');
            })
            .catch(() => {
                // if request is bad:
                // -show an error to the user
                dispatch(authError('Bad login info'));
            });
    
    }
}

export function signupUser({ email, password }) {
    // signup export logic is very simiular to our signin export logic
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
        .then(response => {
            dispatch({ type: AUTH_USER });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/feature');
        })
        .catch(response => dispatch(authError(response.data.error)));
        // we want to send back specific responses regarding signup errors
    };
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');

    return {
        type: UNAUTH_USER
    };
}

export function fetchMessage() {
    return function (dispatch) {
        axios.get(ROOT_URL, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then(response => {
                console.log(response);
            });
    };
}