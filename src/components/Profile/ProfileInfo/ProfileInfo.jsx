import Preloader from "../../common/Preloader/Preloader"
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import userPhoto from "../../../assets/images/user.png"
import ProfileData from "./ProfileData/ProfileData"


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhoto = (e) => {
        if (e.target.files[0]) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large || userPhoto} />
                {props.isOwner && <input onChange={onMainPhoto} type="file" />}
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            
        </div>
    )
}

export default ProfileInfo;