import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import Music from './components/Musiс/Music';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className='flex_content'>
          <Navbar />
          <div className='wrapper_content'>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/dialogs/*" element={<Dialogs />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
