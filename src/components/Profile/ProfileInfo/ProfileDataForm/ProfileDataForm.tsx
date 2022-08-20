import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { saveProfile } from '../../../../Redux/reducer-profile.ts'
import React from 'react'
import { contactType, profileType } from '../../../../types/types'

type Props = {
    saveProfile: (data: any) =>  profileType & contactType
}

const ProfileDataForm = (props: Props) => {
    const {
        register,
        handleSubmit
    } = useForm({
        defaultValues: {
          fullName: "",
          lookingForAJob: false,
          facebook: "",
          website: "",
          vk: "",
          twitter: "",
          instagram: "",
          github: "", 
          mainLink: ""
        },
        mode: "onChange"
    })


    return ( 
        <form onSubmit={handleSubmit(data => {
            props.saveProfile(data)
        })}>
            <label>Fullname</label>
            <input {...register("fullName", { required: true })} placeholder={"..."} />
            <label>Looking for a job</label>
            <input type="checkbox" {...register("lookingForAJob")}  />
            <label>Facebook</label>
            <input {...register("facebook", )} placeholder={"..."} />
            <label>Website</label>
            <input {...register("website", )} placeholder={"..."} />
            <label>Vk</label>
            <input {...register("vk", )} placeholder={"..."} />
            <label>Twitter</label>
            <input {...register("twitter", )} placeholder={"..."} />
            <label>Instagram</label>
            <input {...register("instagram", )} placeholder={"..."} />
            <label>Github</label>
            <input {...register("github", )} placeholder={"..."} />
            <label>MainLink</label>
            <input {...register("mainLink", )} placeholder={"..."} />
            <input type="submit" />
        </form>)

    }
export default connect(null, {saveProfile}) (ProfileDataForm);