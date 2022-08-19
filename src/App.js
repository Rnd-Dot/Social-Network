import { Routes, Route } from "react-router-dom";
import './App.css';
import HeaderComponent from "./components/Header/HeaderContainer";
import Music from './components/Musiс/Music';
import Navbar from './components/Navbar/Navbar.jsx';
import Settings from './components/Settings/Settings';
import React, { Suspense } from "react";
import { connect } from 'react-redux';
import { initializeApp } from './Redux/reducer-app.ts';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from "redux";
import { Navigate } from "react-router-dom";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Find-users/UsersContainer.tsx"));
const Login = React.lazy(() => import("./components/Login/Login"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return < Preloader />
    }
    return (
      <div className="wrapper">
        <HeaderComponent />
        <div className='flex_content'>
          <Navbar />
          <div className='wrapper_content'>

            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/" element={<Navigate to="/profile" />} />
                <Route path="/profile/:userId" element={<ProfileContainer />} />
                <Route path="/profile" element={<ProfileContainer />} />
                <Route exact path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/music" element={<Music />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, { initializeApp }))
  (App);
