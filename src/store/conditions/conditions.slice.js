import {createSlice} from "@reduxjs/toolkit";

const conditionsSlice = createSlice({
    name: 'conditions-slice',
    initialState: {
        which_is_running: 0,
        preliminary_running: false,
        operation_running: false,
        fault_running: false
    },
    reducers: {
        setWhichIsRunning(state, action) {
            state.which_is_running = action.payload
        },
        setPreliminaryRunning(state, action) {
            state.preliminary_running = action.payload
        },
        setOperationRunning(state, action) {
            state.operation_running = action.payload
        },
        setFaultRunning(state, action) {
            state.fault_running = action.payload
        }
    }
})

export const {
    setWhichIsRunning,
    setPreliminaryRunning,
    setOperationRunning,
    setFaultRunning
} = conditionsSlice.actions

export default conditionsSlice.reducer