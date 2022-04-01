import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
    userLoading: false,
    userHasErrors: false,
    email: '',
    firstName: '',
    lastName: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state) => {
            state.userLoading = true
        },
        getUserSuccess: (state, user) => {
            console.log(user)
            state.email = user.payload.email
            state.firstName = user.payload.firstName
            state.lastName = user.payload.lastName

            state.userLoading = false
            state.userHasErrors = false
        },
        getUserFailure: (state) => {
            state.userLoading = false
            state.userHasErrors = true
        },
    },
})

//export for thunk
export const { getUser, getUserSuccess, getUserFailure } = userSlice.actions

// the state is the state of the user slice ?
export const fetchSelector = (state) => state.user

// The reducer
export default userSlice.reducer

// Asynchronous thunk action
export function fetchUser(token) {
    console.log('token in fetchUser : ' + token)
    return async (dispatch) => {
        dispatch(getUser())
        axios
            .post(
                'http://localhost:3001/api/v1/user/profile',
                {},
                {
                    headers: {
                        authorization: String(token),
                    },
                }
            )
            .then(function (response) {
                console.log(response.data.body)
                const user = response.data.body
                dispatch(getUserSuccess(user))
            })
            .catch(function (error) {
                dispatch(getUserFailure())
            })
    }
}
