import Preloader from "../../common/Preloader/Preloader"
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import userPhoto from "../../../assets/images/user.png"
import React, { useState } from "react"
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

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
                <div>{props.profile.fullName}</div>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            {editMode ? <ProfileDataForm profile={props.profile} />
                : <ProfileData profile={props.profile}
                    isOwner={props.isOwner}
                    toEditMode={() => { setEditMode(true) }} />}
        </div>
    )
}

const ProfileData = ({ profile, isOwner, toEditMode }) => {
    return <>
        {isOwner && <button onClick={toEditMode}>red</button>}
        <div>
            <b> Looking for a job : {profile.lookingForAJob ? "yes" : "no"}</b>
        </div>
        <div>Contacts: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitel={key} contactValue={profile.contacts[key]} />
        })}</div>
    </>

}



const Contact = ({ contactTitel, contactValue }) => {
    return <div>{contactTitel} : {contactValue}</div>
}

export default ProfileInfo;