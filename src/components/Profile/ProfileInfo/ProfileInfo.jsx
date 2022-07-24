import Preloader from "../../common/Preloader/Preloader"
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import userPhoto from "../../../assets/images/user.png"
import React, { useState } from "react"
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import s from "./ProfileInfo.module.css"


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
        <div className={s.block}>
            <div className={s.user_photo}>
                <img className={s.photo} src={props.profile.photos.large || userPhoto} />
                {props.isOwner && <div><input onChange={onMainPhoto} type="file" /></div>}
            </div>
            <div className={s.info}>
                <div className={s.info_user}>
                    <div>
                        <h2>{props.profile.fullName}</h2>
                    </div>
                    <div>
                        Status: <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                    </div>
                </div>

                <div className={s.info_user}>
                    <h3>Social networks</h3>
                    {editMode ? <ProfileDataForm profile={props.profile} />
                        : <ProfileData profile={props.profile}
                                        isOwner={props.isOwner}
                                        toEditMode={() => { setEditMode(true) }} />}
                </div>
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, toEditMode }) => {
    return <>
        {isOwner && <button onClick={toEditMode}>Edit</button>}
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