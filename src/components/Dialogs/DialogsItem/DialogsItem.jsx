import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink to={path} className={navData => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
    )
}

export default DialogsItem;