import userPhoto from "../../assets/images/user.png"
import s from "./Users.module.css"
import { NavLink } from "react-router-dom"
import React from "react"
import { photosType } from "../../types/types"

type UserType = {
    photos: photosType
    followed: boolean
    id: number
    name: string
}

type Props = {
    user: UserType
    followingProgress: Array<number>
    followThunk: (id: number) => void
    unfollowThunk: (id: number) => void
}

const User: React.FC<Props> = ({user,followingProgress, followThunk , unfollowThunk}) => {
    return(
         <div >
                <span>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={s.userPhoto} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                                followThunk(user.id)
                            }}>
                                Unfollow</button>


                            : <button  disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                                unfollowThunk(user.id)
                            }}>
                                Follow</button>}
                    </div>
                </span>
                <span>
                    <div>{user.name}</div>
                </span>
            </div>)
}

export default User;