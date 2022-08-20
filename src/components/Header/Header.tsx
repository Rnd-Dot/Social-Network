import { NavLink } from "react-router-dom"
import s from "./Header.module.css"
import React from "react"

type Props = {
    isAuth: boolean
    login: string
    logout: any
}

const Header = (props : Props) => {
    return <header className={s.header}>
    <img src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" alt=""></img>
    <div className={s.loginBlock}>
        {props.isAuth ? 
        <div>
            {props.login}
            <NavLink to={"/login"} onClick={props.logout}>logout</NavLink>
        </div> 
        : <NavLink to={"/login"}>Login</NavLink>}
    </div>
   </header>
}
    


export default Header;