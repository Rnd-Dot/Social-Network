import userPhoto from "../../assets/images/user.png"
import s from "./Users.module.css"
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p && s.selectedPage}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "90d38e1f-b504-4d50-ba35-108bbc91a639"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });



                            }}>
                                Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "90d38e1f-b504-4d50-ba35-108bbc91a639"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
                            }}>
                                Follow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                </span>
            </div>)
        }
    </div>
}

export default Users;