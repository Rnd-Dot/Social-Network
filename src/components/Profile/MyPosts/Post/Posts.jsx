
import s from "./Posts.module.css";

const Posts = (props) => {
    return (
        <div className={s.post}>
            <img scr="https://vsekidki.ru/uploads/posts/2016-08/1470735121_lecdaa3axdc.jpg" alt= ""></img>
            {props.message}
            <div>
                <span>Like </span> {props.like_count}
            </div>

        </div>
    );
};

export default Posts;