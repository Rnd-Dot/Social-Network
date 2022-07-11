import { connect } from "react-redux";
import Profile from "./Profile";
import React from "react";
import { profileUsersThunk, getStatus, updateStatus } from "../../Redux/reducer-profile"
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.profileUsersThunk(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        </>
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
});



function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

export default compose(
    connect(mapStateToProps, { profileUsersThunk, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);