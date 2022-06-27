import s from "./MyPosts.module.css";
import Posts from "./Post/Posts.jsx";
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/state";



const MyPosts = (props) => {
    let postItem = props.posts.map(p =>
        <Posts message={p.message} like_count={p.like_count} />
    );


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPost = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div>my post
            <div>
                <textarea onChange={onPost} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>добавить</button>
            </div>
            <div>new post</div>
            {postItem}
        </div>);

};

export default MyPosts;