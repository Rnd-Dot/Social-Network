
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return <div className={s.content}>
        <ProfileInfo />


        <MyPosts 
            posts={props.profilePage.posts}
            updateNewPostText={props.updateNewPostText}
            newPostText={props.profilePage.newPostText}
            addPost={props.addPost} />

    </div>
};

export default Profile;