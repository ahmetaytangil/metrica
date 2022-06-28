import {configureStore} from "@reduxjs/toolkit";

import workOrderReducer from "./work_order/work_order.slice"
import authReducer from "./auth/auth.slice"
import {getFromLocalStorage} from "../utils/helpers";
import {storageNames} from "../constants/storage_names";

const redux = configureStore({
    preloadedState: {
        auth: {user: getFromLocalStorage(storageNames.user)}
    },
    reducer: {
        work_order: workOrderReducer,
        auth: authReducer
    }
})

export default redux