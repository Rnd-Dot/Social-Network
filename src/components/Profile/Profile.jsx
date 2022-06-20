import s from"./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
    <div>
        <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"></img>
    </div>
    <div>ava</div>
    <MyPosts />
    
    </div>
};

export default Profile;