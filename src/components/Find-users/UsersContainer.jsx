import { connect } from "react-redux"
import React from "react";
import { getUsersThunkPage, unfollowThunk, getUsersThunk, followThunk } from "../../Redux/reducer-users"
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";



class UsersAPIcomponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkPage(pageNumber, this.props.pageSize)
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
        followingProgress={this.props.followingProgress}
        followThunk={this.props.followThunk}
        unfollowThunk={this.props.unfollowThunk}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        followingProgress: state.usersPage.followingProgress
    }
}



const UsersContainer = connect(mapStateToProps, {
    unfollowThunk,getUsersThunkPage,
    getUsersThunk,followThunk
})(UsersAPIcomponent);

export default UsersContainer;