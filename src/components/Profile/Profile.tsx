import s from "./Profile.module.css"
import React from "react"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo.tsx"
import { profileType } from "../../types/types";

type Props = {
    profile: profileType
    isOwner: boolean
    savePhoto: (photo: any) => void
    updateStatus: (NewStatus: string) => void
    status: string
}

const Profile = (props: Props) => {
    return <div className={s.content}>
        <ProfileInfo profile={props.profile} status={props.status}
                     updateStatus={props.updateStatus}
                     isOwner={props.isOwner}
                     savePhoto={props.savePhoto}/>
        <MyPostsContainer />
    </div>
};

export default Profile;