import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { fetchUser, fetchSelector } from './userSlice'

export const initialState = {
    loading: false,
    hasErrors: false,
    token: null,
}

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        getToken: (state) => {
            console.log('get token in reducer')
            state.loading = true
        },
        getTokenSuccess: (state, token) => {
            state.token = token
            state.loading = false
            state.hasErrors = false
        },
        getTokenFailure: (state) => {
            state.loading = false
            state.hasErrors = true
        },
    },
})

//export for thunk
export const { getToken, getTokenSuccess, getTokenFailure } = tokenSlice.actions

// the state is the state of the token slice ?
export const tokenSelector = (state) => state.token

// The reducer
export default tokenSlice.reducer

// Asynchronous thunk action
export function fetchToken(user) {
    return async (dispatch) => {
        dispatch(getToken())
        axios
            .post('http://localhost:3001/api/v1/user/login', {
                email: user.mail,
                password: user.password,
            })
            .then(function (response) {
                const token = response.data.body.token
                dispatch(getTokenSuccess(token))
                dispatch(fetchUser(token))
                console.log('token in fetch : ' + token)
            })
            .catch(function (error) {
                dispatch(getTokenFailure())
            })
    }
}
