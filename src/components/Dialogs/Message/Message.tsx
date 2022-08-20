import s from "./../Dialogs.module.css"
import React from "react"


type Props = {
    message: string 
}

const Message = (props: Props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default Message;