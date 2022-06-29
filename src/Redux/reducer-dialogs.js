import {cloneDeep} from "lodash"

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
        case "ADD-MESSAGE": {
            let newMessageText = {
                id: 4,
                message: state.newMessages
            };
            let copyState = cloneDeep(state)
            copyState.messages.push(newMessageText);
            copyState.newMessages = "";
            return copyState;
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            let copyState = cloneDeep(state)
            copyState.newMessages = action.newText;
            console.log(copyState);
            return copyState;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"});

export const updateNewMessageTextActionCreator = (text) => ({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text});


export default dialogsReducer;