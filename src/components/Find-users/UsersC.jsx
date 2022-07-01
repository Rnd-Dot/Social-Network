import React from "react";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"
import s from "./Users.module.css"

class Users extends React.Component{
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=> {
                this.props.setUsers(response.data.items);
            });
        }
    }
    render() {
        return <div>
        <button onClick={this.getUsers}>Get Users</button>
        {
            this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? 
                        <button onClick={()=> {this.props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick={()=> {this.props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                    <span>
                        <div>{u.name}</div>
                    </span>
                <span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.contry"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
    }
}

export default Users;