import Header from "./Header";
import React from "react";
import axios from "axios";
import { setUsersData } from "../../Redux/reducer-auth"
import { connect } from "react-redux";


class HeaderComponent extends React.Component{
    componentDidMount() {
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setUsersData(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}
    
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps,{setUsersData}) (HeaderComponent);