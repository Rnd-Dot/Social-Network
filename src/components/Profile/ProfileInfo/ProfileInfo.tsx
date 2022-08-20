import Preloader from "../../common/Preloader/Preloader"
import userPhoto from "../../../assets/images/user.png"
import React, { useState } from "react"
import ProfileDataForm from './ProfileDataForm/ProfileDataForm.tsx';
import s from "./ProfileInfo.module.css"
import { Button } from "@mui/material";
import ProfileStatus from './ProfileStatus/ProfileStatus.tsx';
import { profileType } from "../../../types/types";


type Props = {
    profile: profileType
    isOwner: boolean
    status: string
    updateStatus: (NewStatus: string) => void
    savePhoto: (photo: any) => void
}

const ProfileInfo = (props: Props) => {
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
                <img className={s.photo} src={props.profile.photos.large || userPhoto} alt=""/>
                {props.isOwner && <div>
                    <Button className={s.btn} variant="contained" component="label">
                        Upload
                        <input onChange={onMainPhoto} hidden accept="image/*" multiple type="file" />
                    </Button>
                    </div>}
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
        {isOwner && <Button size="small" onClick={toEditMode} variant="contained">Edit</Button>}
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