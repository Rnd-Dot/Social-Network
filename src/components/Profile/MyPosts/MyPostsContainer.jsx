import { connect } from 'react-redux';
import { addPost, updateNewPostText } from "../../../Redux/reducer-profile";
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}


const MyPostsContainer = connect(mapStateToProps,{addPost, updateNewPostText}) (MyPosts);

export default MyPostsContainer;