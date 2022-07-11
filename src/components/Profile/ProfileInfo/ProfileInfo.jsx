import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus"


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

 
    return (
        <div>
            <div>
                <img src={props.profile.photos.large} />
            </div>
            <div>{props.profile.fullName}</div>
            <span>{props.profile.aboutMe}</span>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
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