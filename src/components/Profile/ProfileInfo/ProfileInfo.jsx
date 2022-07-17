import Preloader from "../../common/Preloader/Preloader"
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import userPhoto from "../../../assets/images/user.png"


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
            <div>{props.profile.fullName}</div>
            <span>{props.profile.aboutMe}</span>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            <div>
                <h2>Social networks:</h2>
                <ul>
                    <li>facebook:{props.profile.contacts.facebook}</li>
                    <li>vk:{props.profile.contacts.vk}</li>
                    <li>website:{props.profile.contacts.website}</li>
                    <li>twitter:{props.profile.contacts.twitter}</li>
                    <li>instagram:{props.profile.contacts.instagram}</li>
                    <li>youtube:{props.profile.contacts.youtube}</li>
                    <li>github:{props.profile.contacts.github}</li>
                    <li>mainLink:{props.profile.contacts.mainLink}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;