import Header from "./Header";
import React from "react";
import { getAuthUserData, logout } from "../../Redux/reducer-auth"
import { connect } from "react-redux";


class HeaderComponent extends React.Component{
    componentDidMount() { 
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}
    
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps,{getAuthUserData, logout}) (HeaderComponent);