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
        case "ADD-POST":
            let newPost = {
                id: 5,
                message: state.newPostText,
                like_count: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;