import User from "./User.tsx";
import React from "react";
import { UserType } from "../../types/types";
//@ts-ignore
import Paginator from '../common/Paginator/Paginator.tsx';

type Props = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<UserType>
    followingProgress: Array<number>
    followThunk: (id: number) => void
    unfollowThunk: (id: number) => void
}

const Users: React.FC<Props> = ({ currentPage, onPageChanged, totalUsersCount, pageSize, ...props }) => {
    return <div>
        < Paginator totalItemCount={totalUsersCount} pageSize={pageSize}
            currentPage={currentPage} onPageChanged={onPageChanged} />
        {
            props.users.map(u => <User key={u.id}
                user={u}
                followingProgress={props.followingProgress}
                followThunk={props.followThunk}
                unfollowThunk={props.unfollowThunk}
                 />)
        }
    </div>
}

export default Users;