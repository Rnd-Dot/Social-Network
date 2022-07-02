import React from "react";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"
import s from "./Users.module.css"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        
        let pages = [];
        console.log(pages)

        for(let i = 1; i<= pagesCount ; i += 1) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map (p => {
                   return <span onClick={()=> {this.setCurrentPage(p)}} className={this.props.currentPage === p && s.selectedPage}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto} />
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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