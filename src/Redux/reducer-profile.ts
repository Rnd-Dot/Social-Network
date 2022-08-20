import { profileAPI } from "../api/api"
import { photosType, postType, profileType } from "../types/types"

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS_USERS = "SET_STATUS_USERS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"


let initialState = {
    posts: [
        { id: 1, message: "test 1", like_count: 5 },
        { id: 2, message: "test 2", like_count: 20 },
        { id: 3, message: "test 3", like_count: 10 },
        { id: 4, message: "test 4", like_count: 9 }
    ] as Array<postType>,

    newPostText: "",

    profile: null as profileType | null,

    status: ""
}

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any) : InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, { id: 5, message: state.newPostText, like_count: 0 }]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS_USERS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        default:
            return state;

    }
}

type addPostType = {
    type: typeof ADD_POST
}

export const addPost = (): addPostType => ({ type: ADD_POST });

type updateNewPostTextType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

export const updateNewPostText = (text: string): updateNewPostTextType => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: any
}

export const setUserProfile = (profile: profileType): setUserProfileType => ({ type: SET_USER_PROFILE, profile });

type  setStatusUserType = {
    type: typeof SET_STATUS_USERS
    status: string
}

export const setStatusUser = (status: string): setStatusUserType => ({ type: SET_STATUS_USERS, status });

type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: any
}

export const savePhotoSuccess = (photos: photosType): savePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos });



export const profileUsersThunk = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.setUsersProfile(userId)
    dispatch(setUserProfile(response.data))
}


export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusUser(response.data))
}


export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusUser(status))
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: profileType) => async (dispatch: any) => {
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(setUserProfile(response.data.data))
    }
}


export default profileReducer;

