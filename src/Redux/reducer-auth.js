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
                ...action.payload 
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

export const setUsersData = (userId , email, login, isAuth, isError) => ({type: SET_USERS_DATA, payload: {userId,email,login, isAuth ,isError}});

export const setError = (loginSuccess, error) => ({type: SET_ERROR, loginSuccess, error});

export const getAuthUserData = () => {
    return (dispatch) => {
        LoginAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUsersData(id, email, login, true , false))
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        LoginAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
            else if (data.resultCode === 1) {
                dispatch(setError(true, data.messages[0]))
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        LoginAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUsersData(null, null, null, false , false))
            }
        })
    }
}

export default authReducer;