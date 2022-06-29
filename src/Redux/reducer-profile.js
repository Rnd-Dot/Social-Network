import {cloneDeep} from "lodash"

let initialState = {
    posts: [
        { id: 1, message: "Здарова", like_count: "5" },
        { id: 2, message: "Ты кто", like_count: "20" },
        { id: 3, message: "Получилось", like_count: "100000" },
        { id: 4, message: "так", like_count: "9" }
    ],

    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like_count: 0
            };
            let copyState = cloneDeep(state)
            copyState.posts.push(newPost);
            copyState.newPostText = "";
            return copyState;
        }
        case "UPDATE-NEW-POST-TEXT":
            let copyState = cloneDeep(state)
            copyState.newPostText = action.newText;
            return copyState;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: "ADD-POST"});

export const updateNewPostTextActionCreator = (text) => ({type: "UPDATE-NEW-POST-TEXT", newText: text});

export default profileReducer;