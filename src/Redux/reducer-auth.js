import { loginAPI, securityAPI } from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";
const SET_ERROR = "SET_ERROR"
const GET_CAPTCHA_URL = "GET_CAPTCHA_URL"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isError: true,
    error: "",
    captchaUrl: null
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
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
}

export const setUsersData = (userId, email, login, isAuth, isError) => ({ type: SET_USERS_DATA, payload: { userId, email, login, isAuth, isError } });

export const setError = (loginSuccess, error) => ({ type: SET_ERROR, loginSuccess, error });

export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL, captchaUrl });

export const getAuthUserData = () => async (dispatch) => {
    let response = await loginAPI.me();
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setUsersData(id, email, login, true, false))
    }
}


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await loginAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        dispatch(setError(true, response.data.messages[0]))
    }
}


export const logout = () => async (dispatch) => {
    let response = await loginAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUsersData(null, null, null, false, false))
    }
}


export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export default authReducer;