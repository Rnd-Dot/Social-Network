import { connect } from "react-redux";
import Profile from "./Profile";
import React from "react";
import { profileUsersThunk } from "../../Redux/reducer-profile"
import { useParams } from "react-router-dom";


class ProfileAPIcontainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.profileUsersThunk(userId)
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile} />
        </>
    }
}




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

const ProfileContainer = connect(mapStateToProps, { profileUsersThunk })(withRouter(ProfileAPIcontainer))



export default ProfileContainer;