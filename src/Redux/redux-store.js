import {combineReducers, legacy_createStore as createStore, legacy_createStore} from "redux"
import profileReducer from "./reducer-profile"
import dialogsReducer from "./reducer-dialogs"
import usersReducer from "./reducer-users";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
});

let store = legacy_createStore(reducers)

window.store = store;

export default store;