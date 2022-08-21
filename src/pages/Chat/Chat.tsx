import  React, {useEffect, useState}  from "react"

const ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
 
}

const Chat: React.FC = () => {
    return(
     <div>
        <Messages />
        <MessageForm />
     </div>
    )
}

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect (() => {
        ws.addEventListener("message", (e: MessageEvent)=> {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessage) => [...prevMessage, ...newMessages])
        })
    }, [])

    return(
     <div style={{height: '350px', overflowY: 'auto'}}>
        {messages.map((m, index) => <Message key={index} message = {m}/>)}
     </div>
    )
}

const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
    return(
     <div>
        <img style={{width: "40px"}} src={message.photo} alt="" /> 
        <b>{message.userName}</b>
        <div>
            {message.message}
        </div>
        <hr />
     </div>
    )
}

const MessageForm: React.FC = () => {
    const [message, setMessage] = useState("")

    const sendMessage = () => {
        if (!message) {
            return;
        }

        ws.send(message)
        setMessage("")
    }

    return(
     <div>
        <textarea onChange={(e)=> setMessage(e.currentTarget.value)} value={message}></textarea>
        <div>
            <button onClick={sendMessage}>Send</button>
        </div>
     </div>
    )
}

export default Chat;