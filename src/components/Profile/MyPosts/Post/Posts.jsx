import userPhoto from "../../../../assets/images/user.png"
import s from "./Posts.module.css";

const Posts = (props) => {
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