import { useForm } from 'react-hook-form';

const ProfileData = (props) => {
     return (
         <div>
             <ProfileDataForm />
            {/* <div>{props.profile.fullName}</div>
                <span>{props.profile.aboutMe}</span> */}
            {/* <ul>
                    <li>facebook:{props.profile.contacts.facebook}</li>
                    <li>vk:{props.profile.contacts.vk}</li>
                    <li>website:{props.profile.contacts.website}</li>
                    <li>twitter:{props.profile.contacts.twitter}</li>
                    <li>instagram:{props.profile.contacts.instagram}</li>
                    <li>youtube:{props.profile.contacts.youtube}</li>
                    <li>github:{props.profile.contacts.github}</li>
                     <li>mainLink:{props.profile.contacts.mainLink}</li>
                 </ul> */}
         </div>
     )
 }

const ProfileDataForm = () => {
    
    const {
        register,
        handleSubmit,
        formState: { error, isValid }
    } = useForm({
        defaultValues: {
            // lookingForAJob: "",
            // lookingForAJobDescription: "",
            fullName: "",
            contacts: "",
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: ""
        },
        mode: "onChange"
    })
    return (<>
        <form onSubmit={handleSubmit((data) => {
            console.log(data)
        })}>
            <input {...register("fullName")} />
            <input {...register("contacts")} />
            <label >Social networks:</label>
            <input {...register("github")} />
            <input {...register("vk")} />
            <input {...register("facebook")} />
            <input {...register("instagram")} />
            <input {...register("twitter")} />
            <input {...register("website")} />
            <input {...register("youtube")} />
            <input {...register("mainLink")} />
            <input type={"submit"} disabled={!isValid} />
        </form>
    </>
    )
}

export default ProfileData;