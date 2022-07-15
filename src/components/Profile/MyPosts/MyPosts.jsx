import s from "./MyPosts.module.css";
import Posts from "./Post/Posts.jsx";
import React from 'react';



const MyPosts = (props) => {
    console.log("aaa")
    let postItem = [...props.profilePage.posts].reverse().map(p =>
        <Posts message={p.message} like_count={p.like_count} />
    );


    let addPost = () => {
        props.addPost();
    }

    let onPost = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div>my post
            <div>
                <textarea onChange={onPost} value={props.profilePage.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>добавить</button>
            </div>
            <div>new post</div>
            {postItem}
        </div>);

};

export default MyPosts;