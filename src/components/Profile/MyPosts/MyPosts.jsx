import s from "./MyPosts.module.css";
import Posts from "./Post/Posts.jsx";
import React from 'react';



const MyPosts = (props) => {
    let postItem = [...props.profilePage.posts].reverse().map(p =>
        <Posts key={p.id} message={p.message} like_count={p.like_count} />
    );


    let addPost = () => {
        props.addPost();
    }

    let onPost = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.posts}>
            <div className={s.label_posts}>
                <h4>Posts</h4>
                <div>
                    <input className={s.field__input} onChange={onPost} value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button className={s.btn} onClick={addPost}>добавить</button>
                </div>
            </div>
            
            {postItem}
        </div>);

};

export default MyPosts;