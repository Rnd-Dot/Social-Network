import s from "./MyPosts.module.css";
import Posts from "./Post/Posts.jsx";

const MyPosts = () => {
    return (
        <div>my post
            <div>new post</div>
            < Posts message= "Hello" like_count= "2" />
            < Posts message= "Привет,как жизнь?" like_count= "10"/>
            < Posts message= "Привет" like_count= "6"/>
            < Posts message= "Гуд" like_count= "4"/>
            
        </div>);

};

export default MyPosts;