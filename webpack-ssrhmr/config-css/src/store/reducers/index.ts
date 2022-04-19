import { combineReducers } from "redux"
// import { cinemaReducer } from "./cinemaReducer"
// import { bgReducer } from "./bgReducer"
// import { alertReducer } from "./alertReducer"
// import { authReducer } from "./authReducer"

export const rootReducer = combineReducers({
    // cinema: cinemaReducer,
    // bg: bgReducer,
    // alert: alertReducer,
    // auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>
