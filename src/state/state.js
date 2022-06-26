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
    
            newMessages: "",
    
            dialogs: [
                { id: 1, name: "Dima" },
                { id: 2, name: "Vova" },
                { id: 3, name: "Ivan" },
                { id: 4, name: "Roma" }
            ]
        }
    },

    _callSubscriber() {},

    getState() {
        return this._state;
    },

    addMessage()  {
        let newMessageText = {
            id:4,
            message: this._state.dialogsPage.newMessages
        };
        this._state.dialogsPage.messages.push(newMessageText);
        this._state.dialogsPage.newMessages= "";
        this._callSubscriber(this._state);
    },
 
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessages = newText;
        this._callSubscriber(this._state);
    },
    
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like_count: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText= "";
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
} 

export default store;