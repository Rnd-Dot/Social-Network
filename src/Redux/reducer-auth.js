import { LoginAPI } from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";
const SET_ERROR = "SET_ERROR"


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isError: true,
    error: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        case SET_ERROR:
            return {
                ...state,
                isError: action.loginSuccess,
                error: action.error
            }
        default:
            return state;
    }
}

export const setUsersData = (userId, email, login, isAuth, isError) => ({ type: SET_USERS_DATA, payload: { userId, email, login, isAuth, isError } });

export const setError = (loginSuccess, error) => ({ type: SET_ERROR, loginSuccess, error });

export const getAuthUserData = () => async (dispatch) => {
    let response = await LoginAPI.me();
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setUsersData(id, email, login, true, false))
    }
}


export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await LoginAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    else if (response.data.resultCode === 1) {
        dispatch(setError(true, response.data.messages[0]))
    }
}


export const logout = () => async (dispatch) => {
    let response = await LoginAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUsersData(null, null, null, false, false))
    }
}


export default authReducer;