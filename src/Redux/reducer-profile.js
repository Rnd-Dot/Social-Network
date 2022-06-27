const profileReducer = (state,action) => {
    if(action.type === "ADD-POST") {
        let newPost = {
            id: 5,
            message: state.newPostText,
            like_count: 0
        };
        state.posts.push(newPost);
        state.newPostText= "";
    }
    else if(action.type === "UPDATE-NEW-POST-TEXT") {
        this._state.profilePage.newPostText = action.newText;
    }

    return state;
}

export default profileReducer;