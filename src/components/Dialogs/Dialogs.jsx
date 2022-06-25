import React from 'react';
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

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        props.addMessage(text);
    }

    let onMessage = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text); 

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogElements}
            </div>
            <div className="messages">
                {messageElements}
                <div>
                    <textarea onChange={onMessage} ref={newMessage} value={props.newMessage}/>
                </div>
                <div>
                    <button onClick={addMessage}>Написать</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;