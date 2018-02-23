import { AUTH_USER, UNAUTH_USER } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated: false };
    }

    return state;
    // this is to check whether or not a user is logged in 
    // i.e. whether or not a user is allowed to be able to access "logged in" content
}