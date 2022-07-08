import Header from "./Header";
import React from "react";
import axios from "axios";
import { setUsersData } from "../../Redux/reducer-auth"
import { connect } from "react-redux";
import { setUsersDataAPI } from "../../api/api";


class HeaderComponent extends React.Component{
    componentDidMount() { 
        setUsersDataAPI().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
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