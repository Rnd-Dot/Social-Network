import s from "./MyPosts.module.css";
import Posts from "./Post/Posts.jsx";
import React from 'react';

const MyPosts = (props) => {
    let postItem = props.posts.map(p =>
        <Posts message={p.message} like_count={p.like_count} />
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let onPost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>my post
            <div>
                <textarea onChange={onPost} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>добавить</button>
            </div>
            <div>new post</div>
            {postItem}
        </div>);

};

export default MyPosts;