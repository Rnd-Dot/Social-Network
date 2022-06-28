import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/store';
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";




const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogs.map(d => {
        return <DialogsItem name={d.name} id={d.id} />
    })

    let messageElements = props.dialogsPage.messages.map(m => {
        return <Message message={m.message} />
    })



    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessage = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text)); 

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogElements}
            </div>
            <div className="messages">
                {messageElements}
                <div>
                    <textarea onChange={onMessage}  value={props.newMessages} placeholder="Введите сообщение"/>
                </div>
                <div>
                    <button onClick={addMessage}>Написать</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;