import { Routes, Route } from "react-router-dom";
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from './components/Header/Header.jsx';
import Music from './components/Musiс/Music';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
      <div className="wrapper">
        <Header />
        <div className='flex_content'>
          <Navbar />
          <div className='wrapper_content'>
            <Routes>
              <Route path="/profile" element={<Profile
                store={props.store}
              />} />
              <Route path="/dialogs/*" element={<DialogsContainer 
                store={props.store}/>} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
