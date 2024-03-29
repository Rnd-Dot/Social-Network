import Header from "./Header.tsx"
import React from "react"
import { logout } from "../../Redux/reducer-auth.ts"
import { connect } from "react-redux"


class HeaderComponent extends React.Component{
    render() {
        return <Header {...this.props}/>
    }
}
    
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps,{logout}) (HeaderComponent);