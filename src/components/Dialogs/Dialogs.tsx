import React from 'react';
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem.tsx";
import Message from "./Message/Message.tsx";
import { Button } from '@mui/material';
import  SendIcon  from '@mui/icons-material/Send';
import {ChangeEvent} from 'react';

type Props = {
    dialogs: [
        {name: string
         id: number   
        }
    ]
    messages: [
        {message: string
        id: number   
        }
    ]
    newMessages: string 

    addMessage: () => void
    onMessage: (text: string) => string
}

const Dialogs = (props: Props) => {
    let dialogElements = props.dialogs.map(d => {
        return <DialogsItem name={d.name} id={d.id} key={d.id}/>
    })

    let messageElements = props.messages.map(m => {
        return <Message message={m.message} key={m.id}/>
    })



    let addMessage = () => {
        props.addMessage();
    }

    let onMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
                    <textarea onChange={onMessage} value={props.newMessages} placeholder="Введите сообщение" />
                </div>
                <div>
                    <Button variant="contained" endIcon={ <SendIcon/> } onClick={addMessage}>Send</Button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;