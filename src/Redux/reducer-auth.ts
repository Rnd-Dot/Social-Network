import { loginAPI, securityAPI } from "../api/api.ts"
import {Dispatch} from 'redux';

const SET_USERS_DATA = "SET_USERS_DATA"
const SET_ERROR = "SET_ERROR"
const GET_CAPTCHA_URL = "GET_CAPTCHA_URL"

export type InitialStateType2 = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isError: boolean
    error: string | null
    captchaUrl: string | null
}

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    isError: true,
    error: null as string | null,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState

type Actions = SetUserDataType | SetErrorType | GetCaptchaUrlSuccessType

const authReducer = (state = initialState, action: Actions): InitialStateType => {
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

type SetUserDataPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isError: boolean
}

type SetUserDataType = {
    type: typeof SET_USERS_DATA,
    payload: SetUserDataPayloadType
}

export const setUsersData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean, isError: boolean): SetUserDataType => ({ type: SET_USERS_DATA, payload: { userId, email, login, isAuth, isError } });

type SetErrorType = {
    type: typeof SET_ERROR,
    loginSuccess: boolean
    error: string 
}

export const setError = (loginSuccess: boolean, error: string): SetErrorType => ({ type: SET_ERROR, loginSuccess, error });

type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL,
    captchaUrl: string
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({ type: GET_CAPTCHA_URL, captchaUrl });

export const getAuthUserData = () => async (dispatch: Dispatch<Actions>) => {
    let response = await loginAPI.me();
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setUsersData(id, email, login, true, false))
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
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


export const logout = () => async (dispatch: Dispatch<Actions>) => {
    let response = await loginAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUsersData(null, null, null, false, false))
    }
}


export const getCaptchaUrl = () => async (dispatch: Dispatch<Actions>) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export default authReducer;