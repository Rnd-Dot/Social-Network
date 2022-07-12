import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
    const exit = () => {
        props.logout()
    }

    return <header className={s.header}>
    <img src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" alt=""></img>
    <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
    </div>
    < NavLink onClick={exit} className={s.loginBlock} to={"/login"} >Exit</NavLink>
   </header>
}
    


export default Header;