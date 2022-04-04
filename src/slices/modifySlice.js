import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
    modifyLoading: false,
    modifyHasErrors: false,
}

const modifyUserSlice = createSlice({
    name: 'modify',
    initialState,
    reducers: {
        modifyUser: (state) => {
            state.userLoading = true
        },
        modifyUserSuccess: (state) => {
            state.userLoading = false
            state.userHasErrors = false
        },
        modifyUserFailure: (state) => {
            state.userLoading = false
            state.userHasErrors = true
        },
    },
})

//export for thunk
export const { modifyUser, modifyUserSuccess, modifyUserFailure } =
    modifyUserSlice.actions

// the state is the state of the user slice ?
export const fetchSelector = (state) => state.modify

// The reducer
export default modifyUserSlice.reducer

// Asynchronous thunk action
export function fetchModifyUser({ token, firstName, lastName }) {
    console.log('in fetch modify user token ' + token)
    return async (dispatch) => {
        dispatch(modifyUser())
        axios
            .put(
                'http://localhost:3001/api/v1/user/profile',
                { firstName: firstName, lastName: lastName },
                {
                    headers: {
                        authorization: String(token),
                    },
                }
            )
            .then(function (response) {
                dispatch(modifyUserSuccess())
            })
            .catch(function (error) {
                dispatch(modifyUserFailure())
            })
    }
}
