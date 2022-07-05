import { connect } from "react-redux";
import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { setUserProfile } from "../../Redux/reducer-profile"
import { useParams } from "react-router-dom";


class ProfileAPIcontainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
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

const ProfileContainer = connect(mapStateToProps, { setUserProfile })(withRouter(ProfileAPIcontainer))



export default ProfileContainer;