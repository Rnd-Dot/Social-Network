import userPhoto from "../../../../assets/images/user.png"
import s from "./Posts.module.css"
import React from "react"

type Props = {
    message: string
    like_count: number
}

const Posts = (props: Props) => {
    return (
        <div>
            <img className={s.photo} src={userPhoto} alt="" />
            <div>{props.message}</div>
            <div>
                <span>Like </span> 
                {props.like_count}
            </div>

        </div>
    );
};

export default Posts;