import s from "./MyPosts.module.css";
import Posts from "./Post/Posts.jsx";
import React from 'react';
import { Button } from "@mui/material";
import  SendIcon  from '@mui/icons-material/Send';



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
                    <input className={s.field__input} onChange={onPost} value={props.profilePage.newPostText} />
                </div>
                <div>
                    <Button  className={s.btn} onClick={addPost} variant="contained" endIcon={<SendIcon />}>
                        Publish
                    </Button>
                </div>
            </div>
            <div className={s.my_posts}>
                {postItem}
            </div>
        </div>);

};

export default MyPosts;