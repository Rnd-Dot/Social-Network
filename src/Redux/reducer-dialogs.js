const dialogsReducer = (state, action) => {
    if (action.type === "ADD-MESSAGE") {
        let newMessageText = {
            id: 4,
            message: state.newMessages
        };
        state.messages.push(newMessageText);
        state.newMessages = "";
    }
    else if(action.type === "UPDATE-NEW-MESSAGE-TEXT") {
        state.newMessages = action.newText;
    }

    return state;
}

export default dialogsReducer;