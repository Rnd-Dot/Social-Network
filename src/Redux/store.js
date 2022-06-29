import dialogsReducer from "./reducer-dialogs";
import profileReducer from "./reducer-profile";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Здарова", like_count: "5" },
                { id: 2, message: "Ты кто", like_count: "20" },
                { id: 3, message: "Получилось", like_count: "100000" },
                { id: 4, message: "так", like_count: "9" }
            ],
    
            newPostText: ""
    
        
        },
    
        dialogsPage: {
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
    },

    _callSubscriber() {},

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
