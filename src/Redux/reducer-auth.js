import { LoginAPI } from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA: 
            return {
                ...state,
                ...action.payload,
                isAuth: true   
            }
        default:
            return state;
    }
}

export const setUsersData = (userId , email, login, isAuth) => ({type: SET_USERS_DATA, payload: {userId,email,login, isAuth }});

export const getAuthUserData = () => {
    return (dispatch) => {
        LoginAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUsersData(id, email, login, true))
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
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        LoginAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUsersData(null, null, null, false))
            }
        })
    }
}

export default authReducer;