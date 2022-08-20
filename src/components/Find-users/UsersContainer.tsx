import { connect } from "react-redux"
import React from "react";
//@ts-ignore
import { getUsersThunkPage, unfollowThunk, getUsersThunk, followThunk } from "../../Redux/reducer-users.ts"
//@ts-ignore
import Users from "./Users.tsx";
import Preloader from "../common/Preloader/Preloader";
import { UserType } from "../../types/types";


type MapStateToProps = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingProgress: Array<number>
}

type MapDispatchToProps = {
    followThunk: (id: number) => void
    unfollowThunk: (id: number) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    getUsersThunkPage: (pageNumber: number, pageSize: number) => void
}

type Props = MapStateToProps & MapDispatchToProps


class UsersAPIcomponent extends React.Component<Props>{
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