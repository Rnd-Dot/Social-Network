import React, {useState, useEffect, ChangeEvent} from "react";


type Props = {
    updateStatus: (newStatus: string) => void 
    status: string
}

type State = {
    editMode: boolean
    status: string
}

const ProfileStatus = (props: Props & State) => {
    
    let [editMode , setEditMode] = useState(false)
    let [status , setStatus] = useState(props.status)

    useEffect (() => {
        setStatus(props.status)
    }, [props.status])

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
        
    }

    const activateEditMode = () => {
        setEditMode (true)
    } 

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    
        return (<>
            {!editMode &&
                <div>
                    <span onDoubleClick={ activateEditMode }>{props.status || "set status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={ onStatusChange } autoFocus={true} onBlur={deactivateEditMode} value={ status } />
                </div>
            }
        </>)
}


export default ProfileStatus;