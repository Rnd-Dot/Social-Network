import React, {useState, useEffect} from "react";



const ProfileStatus = (props) => {
    
    let [editMode , setEditMode] = useState(false)
    let [status , setStatus] = useState(props.status)

    useEffect = (() => {
        setStatus(props.status)
    }, [props.status])

    const onStatusChange = (e) => {
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
                    <span onDoubleClick={ activateEditMode }>{props.status || "new status"}</span>
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