import {configureStore} from "@reduxjs/toolkit";

import workOrderReducer from "./work_order/work_order.slice"
import authReducer from "./auth/auth.slice"
import {getFromLocalStorage} from "../utils/helpers";
import {storageNames} from "../constants/storage_names";
import conditionsReducer from "./conditions/conditions.slice";
import lastWorksReducer from "./last_works/last_works.slice";

const redux = configureStore({
    preloadedState: {
        auth: {user: getFromLocalStorage(storageNames.user)}
    },
    reducer: {
        work_order: workOrderReducer,
        auth: authReducer,
        conditions: conditionsReducer,
        last_works: lastWorksReducer
    }
})

export default redux