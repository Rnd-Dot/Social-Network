import React from 'react';
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import { Button } from '@mui/material';
import  SendIcon  from '@mui/icons-material/Send';



const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogs.map(d => {
        return <DialogsItem name={d.name} id={d.id} key={d.id}/>
    })

    let messageElements = props.dialogsPage.messages.map(m => {
        return <Message message={m.message} key={m.id}/>
    })



    let addMessage = () => {
        props.addMessage();
    }

    let onMessage = (e) => {
        let text = e.target.value;
        props.onMessage(text);

    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogElements}
            </div>
            <div className="messages">
                {messageElements}
                <div>
                    <textarea onChange={onMessage} value={props.dialogsPage.newMessages} placeholder="Введите сообщение" />
                </div>
                <div>
                    <Button variant="contained" endIcon={ <SendIcon/> } onClick={addMessage}>Send</Button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;