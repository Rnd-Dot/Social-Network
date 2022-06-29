import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/reducer-profile";
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPost: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts);

export default MyPostsContainer;