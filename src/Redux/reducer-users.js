const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        { id: 1,followed: false, fullname: "Dmitry", location: {city: "Rostov" , contry: "Russia"} },
        { id: 2,followed: true, fullname: "Vova", location: {city: "Moscow" , contry: "Russia"} },
        { id: 3,followed: true, fullname: "Roma", location: {city: "Samara" , contry: "Russia"} },
        { id: 4,followed: false, fullname: "Vika", location: {city: "Krasnodar" , contry: "Russia"} },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map (u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map (u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { 
                ...state,
                users: [...state , ...action.users]
            }
            
        default:
            return state;
    
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId});

export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});

export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;