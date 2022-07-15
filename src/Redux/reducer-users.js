import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
    users: [],
    totalUsersCount: 300,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching ? [...state.followingProgress, action.userId] : state.followingProgress.filter(id => id !== action.userId)
            }

        default:
            return state;

    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });

export const unfollow = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });



export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response= await usersAPI.getUsers(currentPage, pageSize)
            dispatch(setUsers(response.data.items))
            dispatch(toggleIsFetching(false))
    }


export const getUsersThunkPage = (currentPage, pageSize) => async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response= await usersAPI.getUsers(currentPage, pageSize)
            dispatch(setCurrentPage(currentPage))
            dispatch(setUsers(response.data.items))
            dispatch(toggleIsFetching(false))
    }


export const followThunk = (id) => async (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        let response= await usersAPI.unfollow(id)
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(id))
                }
                dispatch(toggleFollowingProgress(false, id))
    }

export const unfollowThunk = (id) => async (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
       let response = await usersAPI.follow(id)
                if (response.data.resultCode === 0) {
                    dispatch(follow(id))
                }
                dispatch(toggleFollowingProgress(false, id))   
    }





export default usersReducer;