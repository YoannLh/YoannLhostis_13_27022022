const initialState = {
    rememberMe: false,
}

export default function rememberMeReducer(state = initialState, action) {
    if (action.type === 'rememberMe') {
        console.log('rememberMe in reducer : ', !state.rememberMe)
        return {
            ...state,
            rememberMe: !state.rememberMe,
        }
    }
    return state
}
