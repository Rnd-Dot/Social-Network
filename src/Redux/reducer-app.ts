import { getAuthUserData } from './reducer-auth.ts'
import {Dispatch} from 'redux';



const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: InitializedSuccessType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: 
        return {
            ...state,
            initialized: true,
        }
        default:
            return state;
    }
}

type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initialezedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS})


export const initializeApp = () => (dispatch: Dispatch<InitializedSuccessType>) => {
   let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initialezedSuccess())
    })   
}



export default appReducer;