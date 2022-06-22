import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink to={path} className={navData => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <DialogsItem  name="Dima" id="1"/>
                <DialogsItem  name="Vova" id="2"/>
                <DialogsItem  name="Ivan" id="3"/>
                <DialogsItem  name="Roma" id="4"/>
            </div>
            <div className="messages">
                <Message message="Hi"/>
                <Message message="YEs"/>
                <Message message="No"/>
            </div>
        </div>
    )
}

export default Dialogs;