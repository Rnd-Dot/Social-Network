import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunkMiddleware from "redux-thunk"
//@ts-ignore
import profileReducer from "./reducer-profile.ts"
//@ts-ignore
import dialogsReducer from "./reducer-dialogs.ts"
//@ts-ignore
import usersReducer from "./reducer-users.ts";
//@ts-ignore
import authReducer from "./reducer-auth.ts";
//@ts-ignore
import appReducer from "./reducer-app.ts";


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