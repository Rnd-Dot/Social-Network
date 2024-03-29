import { useForm } from "react-hook-form"
import { login } from "../../Redux/reducer-auth.ts"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"



const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to={`/profile/` + props.userId} />
    }
    if (!props.isAuth) {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm login={props.login} captchaUrl={props.captchaUrl} />
                {props.isError ? <span>{props.error}</span> :  null}
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
            antiBot: "",
            rememberMe: false
        },
        mode: "onChange"
    })
    return (
        <form onSubmit={handleSubmit((data) => {
            props.login(data.email, data.password, data.rememberMe, data.antiBot)
            reset();
        })}>
            {props.captchaUrl && <img src={props.captchaUrl} alt=""/>}
            {props.captchaUrl && <input {...register("antiBot")} />}
            <label>Login</label>
            <input {...register("email", { required: true })} placeholder={"..."} />

            <label>Password</label>
            <input {...register("password", { required: true, maxLength: 10 })} placeholder={"..."} type={"password"} />
            {errors.password && <p>This field is required</p>}
            <input type={"checkbox"} {...register("rememberMe")} />
            <span>Remember me</span>
            <input type={"submit"} disabled={!isValid} />
        </form>
    )
}

let mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    isError: state.auth.isError,
    error: state.auth.error
});



export default connect(mapStateToProps, { login })(Login);