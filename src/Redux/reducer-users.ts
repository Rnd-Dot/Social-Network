import { Dispatch } from "redux"
import { usersAPI } from "../api/api.ts"
import { UserType } from "../types/types"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
    users: [] as Array<UserType>,
    totalUsersCount: 5000,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followingProgress: [] as Array<number> // array of users id
}

type InitialState = typeof initialState

type Actions = followType | unfollowType | setUsersType | setCurrentPageType | toggleIsFetchingType | toggleFollowingProgressType

const usersReducer = (state = initialState, action: Actions): InitialState => {
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

type followType = {
    type: typeof FOLLOW
    userId: number
}

export const follow = (userId: number): followType => ({ type: FOLLOW, userId });

type unfollowType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unfollow = (userId: number): unfollowType => ({ type: UNFOLLOW, userId });

type setUsersType = {
    type: typeof SET_USERS
    users: any
}

export const setUsers = (users: UserType): setUsersType => ({ type: SET_USERS, users });

type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export const setCurrentPage = (currentPage: number): setCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage });

type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching });

type toggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number):toggleFollowingProgressType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });



export const getUsersThunk = (currentPage: number, pageSize : number) => async (dispatch:any) => {
        dispatch(toggleIsFetching(true))
        let response= await usersAPI.getUsers(currentPage, pageSize)
            dispatch(setUsers(response.data.items))
            dispatch(toggleIsFetching(false))
    }

export const getUsersThunkPage = (currentPage: number, pageSize: number) => async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        let response= await usersAPI.getUsers(currentPage, pageSize)
            dispatch(setCurrentPage(currentPage))
            dispatch(setUsers(response.data.items))
            dispatch(toggleIsFetching(false))
    }

export const followThunk = (id: number) => async (dispatch: Dispatch<Actions>) => {
        dispatch(toggleFollowingProgress(true, id))
        let response= await usersAPI.unfollow(id)
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(id))
                }
                dispatch(toggleFollowingProgress(false, id))
    }

export const unfollowThunk = (id: number) => async (dispatch: Dispatch<Actions>) => {
        dispatch(toggleFollowingProgress(true, id))
       let response = await usersAPI.follow(id)
                if (response.data.resultCode === 0) {
                    dispatch(follow(id))
                }
                dispatch(toggleFollowingProgress(false, id))   
    }


export default usersReducer;