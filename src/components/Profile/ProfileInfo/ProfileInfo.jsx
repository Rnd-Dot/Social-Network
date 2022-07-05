import Preloader from "../../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

 
    return (
        <div>
            <div>
                <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"></img>
            </div>
            <div>
                <img src={props.profile.photos.large} />
            </div>
            <div>{props.profile.fullName}</div>
            <span>{props.profile.aboutMe}</span>
            <div>
                <h2>Social networks:</h2>
                <ul>
                    <li>{props.profile.contacts.facebook}</li>
                    <li>{props.profile.contacts.website}</li>
                    <li>{props.profile.contacts.vk}</li>
                    <li>{props.profile.contacts.twitter}</li>
                    <li>{props.profile.contacts.instagram}</li>
                    <li>{props.profile.contacts.youtube}</li>
                    <li>{props.profile.contacts.github}</li>
                    <li>{props.profile.contacts.mainLink}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;