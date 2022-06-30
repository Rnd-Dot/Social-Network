const Users = (props) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img></img>
                    </div>
                    <div>
                        {u.followed ? 
                        <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick={()=> {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                    <span>
                        <div>{u.fullname}</div>
                    </span>
                <span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.contry}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;