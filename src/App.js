import { Routes, Route } from "react-router-dom";
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Find-users/UsersContainer";
import HeaderComponent from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Music from './components/Musiс/Music';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from './components/Settings/Settings';
import React from "react";
import { connect } from 'react-redux';
import { initializeApp } from './Redux/reducer-app';
import Preloader from './components/common/Preloader';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if(!this.props.initialized) {
      return < Preloader />
    }
    return (
      <div className="wrapper">
        <HeaderComponent />
        <div className='flex_content'>
          <Navbar />
          <div className='wrapper_content'>
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users/*" element={<UsersContainer />} />
              <Route path="/music" element={<Music />} />
              <Route path="/login" element={<Login />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp}) (App);
