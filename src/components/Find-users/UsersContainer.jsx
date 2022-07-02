import { connect } from "react-redux"
import { followActionCreator, setCurrentPageAC, setUsersActionCreator, unfollowActionCreator } from "../../Redux/reducer-users"
import Users from "./UsersC"


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;