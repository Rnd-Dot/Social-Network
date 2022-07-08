import { connect } from "react-redux"
import React from "react";
import { follow, setCurrentPage, setUsers, toggleIsFetching, toggleFollowingProgress, unfollow } from "../../Redux/reducer-users"
import Users from "./Users";
import Preloader from "../common/Preloader";
import { getUsersAPI } from "../../api/api";


class UsersAPIcomponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        getUsersAPI(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        getUsersAPI(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false)
        });
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingProgress={this.props.followingProgress}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}



const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, toggleIsFetching, toggleFollowingProgress
})(UsersAPIcomponent);

export default UsersContainer;