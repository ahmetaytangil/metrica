import {createSlice} from "@reduxjs/toolkit";
import {workOrderModel} from "../../modelling/work_order";

export const workOrderSlice = createSlice({
    name: 'work_order',
    initialState: {
        list: null,
        selected: null
    },
    reducers: {
        storeWorkOrderList(state, action) {
            state.list = workOrderModel(action.payload)
        },
        storeSelectedWorkOrder(state, action) {
            state.selected = workOrderModel(action.payload)
        }
    }
})

export const {storeWorkOrderList, storeSelectedWorkOrder} = workOrderSlice.actions


export default workOrderSlice.reducer