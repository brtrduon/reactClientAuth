import axios from 'axios';
import { browserHistory } from 'react-router';

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
                // -save the JWT token
                // -redirect to the route '/feature'
                browserHistory.push('/feature');
            })
            .catch(() => {
                // if request is bad:
                // -show an error to the user

            });
    
    }
}