import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import profileReducer from "./reducer-profile.ts"
import dialogsReducer from "./reducer-dialogs.ts"
import usersReducer from "./reducer-users.ts"
import authReducer from "./reducer-auth.ts"
import appReducer from "./reducer-app.ts"


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

type RootReducer = typeof reducers;
export type AppState = ReturnType<RootReducer>



const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store

export default store