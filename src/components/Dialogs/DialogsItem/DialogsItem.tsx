import { NavLink } from "react-router-dom"
import s from "./../Dialogs.module.css"
import React from "react"

type Props = {
    name: string
    id: number
}

const DialogsItem = (props: Props) => {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink to={path} className={navData => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
    )
}

export default DialogsItem;