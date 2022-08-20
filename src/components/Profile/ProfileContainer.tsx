import { connect } from "react-redux";
import Profile from "./Profile.tsx";
import React from "react";
import { profileUsersThunk, getStatus, updateStatus, savePhoto } from "../../Redux/reducer-profile.ts"
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const withRouter = WrappedComponent => props => {
    const params = useParams();

    return (
        <WrappedComponent
            {...props}
            id={Object.values(params)}
        />
    );
}

type Props = {
    id: number
    autorizedUserId: number
    profileUsersThunk: (userId: number) => void
    getStatus: (userId: number) => void
    savePhoto: (photo: any) => void
}

class ProfileContainer extends React.Component<Props> {
    refreshProfile() {
        let userId = this.props.id[0];
        if (!userId) {
            userId = this.props.autorizedUserId

        }
        this.props.profileUsersThunk(userId)
        this.props.getStatus(userId)
    }


    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.id[0] !== prevProps.id[0]) {
            this.refreshProfile()
        }
    }

    render() {
        return <>
            <Profile {...this.props}
                isOwner={!this.props.id[0]}
                savePhoto={this.props.savePhoto} />
        </>
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
});




export default compose(
    connect(mapStateToProps, { profileUsersThunk, getStatus, updateStatus, savePhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);