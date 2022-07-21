
import { useForm } from 'react-hook-form';


const ProfileDataForm = () => {
    const {
        register,
        handleSubmit
    } = useForm({
        defaultValues: {
            
        },
        mode: "onChange"
    })


    const onSubmit = data => console.log(data)

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <input type="submit" />
        </form>)

    }
export default ProfileDataForm;