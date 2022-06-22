import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return <div className={s.content}>
        <ProfileInfo />
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>добавить</button>
        </div>
        
        <MyPosts />

    </div>
};

export default Profile;