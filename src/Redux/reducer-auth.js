import { setUsersDataAPI } from "../api/api";

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
                ...action.data,
                isAuth: true   
            }
        default:
            return state;
    }
}

export const setUsersData = (userId , email, login) => ({type: SET_USERS_DATA, data: {userId,email,login}});

export const LoginThunk = () => {
    return (dispatch) => {
        setUsersDataAPI().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setUsersData(id, email, login))
            }
        })
    }
}


export default authReducer;