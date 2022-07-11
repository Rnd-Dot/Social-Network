import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS_USERS = "SET_STATUS_USERS";

let initialState = {
    posts: [
        { id: 1, message: "Здарова", like_count: "5" },
        { id: 2, message: "Ты кто", like_count: "20" },
        { id: 3, message: "Получилось", like_count: "100000" },
        { id: 4, message: "так", like_count: "9" }
    ],

    newPostText: "",

    profile: null,

    status: ""
}

const profileReducer = (state = initialState, action) => {
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
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setStatusUser = (status) => ({ type: SET_STATUS_USERS, status });

export const profileUsersThunk = (userId) => {
    return (dispatch) => {
        profileAPI.setUsersProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatusUser(data))
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if(data.resultCode === 0) {
                dispatch(setStatusUser(status))
            }
            
        });
    }
}


export default profileReducer;

