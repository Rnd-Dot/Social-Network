import {combineReducers, legacy_createStore as createStore, legacy_createStore} from "redux"
import profileReducer from "./reducer-profile"
import dialogsReducer from "./reducer-dialogs"

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
});

let store = legacy_createStore(reducers)


export default store;