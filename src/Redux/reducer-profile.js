const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
        case ADD_POST: 
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, {id: 5, message:state.newPostText, like_count: 0}] 
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;