import {createSlice} from "@reduxjs/toolkit";

const lastWorksSlice = createSlice({
    name: 'last-works-slice',
    initialState: {
        data: null
    },
    reducers: {
        storeLastWorks(state, action) {
            state.data = action.payload
        }
    }
})

export const {storeLastWorks} = lastWorksSlice.actions

export default lastWorksSlice.reducer