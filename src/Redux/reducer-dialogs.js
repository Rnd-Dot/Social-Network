const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "New" },
        { id: 3, message: "WOw" }
    ],

    

    dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Vova" },
        { id: 3, name: "Ivan" },
        { id: 4, name: "Roma" }
    ],

    newMessages: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            return {
                ...state,
                newMessages: "",
                messages: [...state.messages, {id: 4, message: state.newMessages}]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessages: action.newText
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});


export default dialogsReducer;