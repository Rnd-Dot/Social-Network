import { getAuthUserData } from './reducer-auth';


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: 
        return {
            ...state,
            initialized: true
        }
        default:
            return state;
    }
}

export const initialezedSuccess = () => ({type: INITIALIZED_SUCCESS})


export const initializeApp = () => (dispatch) => {
   let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initialezedSuccess())
    })   
}



export default appReducer;