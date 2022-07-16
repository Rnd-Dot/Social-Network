import userPhoto from "../../assets/images/user.png"
import s from "./Users.module.css"
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, ...props }) => {
    return <div>
        < Paginator totalItemCount={totalUsersCount} pageSize={pageSize}
            currentPage={currentPage} onPageChanged={onPageChanged} />
        {
            props.users.map(u => <User key={u.id}
                user={u}
                followingProgress={props.followingProgress}
                followThunk={props.followThunk}
                unfollowThunk={props.unfollowThunk}
                portionSize = {10} />)
        }
    </div>
}

export default Users;