import {createSlice} from "@reduxjs/toolkit";
import {userModel} from "../../modelling/user";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        users: null
    },
    reducers: {
        storeUser(state, action) {
            state.user = userModel(action.payload)
        },
        storeUsers(state, action) {
            state.users = userModel(action.payload)
        }
    }
})

export const {storeUser, storeUsers} = authSlice.actions

export default authSlice.reducer