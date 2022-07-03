import userPhoto from "../../assets/images/user.png"
import s from "./Users.module.css"

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        
        let pages = [];

        for(let i = 1; i<= pagesCount ; i += 1) {
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
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto} />
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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