const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    token: '',
}

export default function userReducer(state = initialState, action) {
    if (action.type === '') {
        // console.log('rememberMe in reducer : ', !state.rememberMe)
        // return {
        //     ...state,
        //     rememberMe: !state.rememberMe,
        // }
    }
    return state
}
