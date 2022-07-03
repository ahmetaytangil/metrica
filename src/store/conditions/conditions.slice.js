import {createSlice} from "@reduxjs/toolkit";

const conditionsSlice = createSlice({
    name: 'conditions-slice',
    initialState: {
        which_is_running: 0
    },
    reducers: {
        setWhichIsRunning(state, action) {
            state.which_is_running = action.payload
        }
    }
})

export const {setWhichIsRunning} = conditionsSlice.actions

export default conditionsSlice.reducer