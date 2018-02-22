

export function signinUser({ email, password}) {
    return function(dispatch) {
        // reduxThunk returns a function from our action creator, and the first argument to the function is dispatch
        // so we need to install reduxThunk in order to return a function where we can arbitrarily access what's being passed into a function that's being returned(?)
        // in this case, reduxThunk apparently allows us to dispatch our own actions at any time we want

        
        // submit email/password to the server
    
        // if request is good:
        // -update state to indicate user is authenticated
        // -save the JWT token
        // -redirect to the route '/feature'
    
        // if request is bad:
        // -show an error to the user
    }

}