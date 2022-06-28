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
        case "ADD-MESSAGE":
            let newMessageText = {
                id: 4,
                message: state.newMessages
            };
            state.messages.push(newMessageText);
            state.newMessages = "";
            return state;
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessages = action.newText;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;