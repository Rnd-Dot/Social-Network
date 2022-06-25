import { rerenderEntireTree } from "../render";

let state = {
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

        newMessage: "",

        dialogs: [
            { id: 1, name: "Dima" },
            { id: 2, name: "Vova" },
            { id: 3, name: "Ivan" },
            { id: 4, name: "Roma" }
        ]
    }
}


export let addMessage = () => {
    let newMessageText = {
        id:4,
        message: state.dialogsPage.newMessage
    };
    state.dialogsPage.messages.push(newMessageText);
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessage = newText;
    rerenderEntireTree(state);
}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like_count: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText= "";
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;