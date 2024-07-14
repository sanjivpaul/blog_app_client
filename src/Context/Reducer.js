const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
            };

        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };

        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            };

        // for user update
        case "UPDATE_START":
            return {
                // using spread operator
                // user and error will be same here
                ...state,
                isFetching: true,
            };

        case "UPDATE_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };

        case "UPDATE_FAILURE":
            return {
                // if user is not updated then user is same as old
                user: state.user,
                isFetching: false,
                error: true,
            };
        case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                error: false,
            };

        default:
            return state
    }
}

export default Reducer;