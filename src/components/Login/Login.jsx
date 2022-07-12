import { useForm } from "react-hook-form"
import { login } from "../../Redux/reducer-auth"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"



const Login = (props) => {
    if(props.isAuth) {
        return <Navigate to={"/profile/*"} />
    }
    else {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm login={props.login}/>
            </div>
        )
    }
}

const LoginForm = (props) => {
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        mode: "onChange"
    })
    return (
        <form onSubmit={handleSubmit((data) => {
            props.login(data.email, data.password, data.rememberMe)
            reset();
        })}>
            <label>Login</label>
            <input {...register("email",{required : true})} placeholder={"..."} />

            <label>Password</label>
            <input {...register("password",{ required: true, maxLength: 10 })} placeholder={"..."} type={"password"}/>
            {errors.password && <p>This field is required</p>}
            <input type={"checkbox"} {...register("rememberMe")}/>
            <span>Remember me</span>
            <input type={"submit"} disabled={!isValid} />
        </form>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});



export default connect(mapStateToProps, {login}) (Login);