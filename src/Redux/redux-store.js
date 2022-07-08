import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import profileReducer from "./reducer-profile"
import dialogsReducer from "./reducer-dialogs"
import usersReducer from "./reducer-users";
import authReducer from "./reducer-auth";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;