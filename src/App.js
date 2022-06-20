import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className='wrapper_content'>
        <Profile />
      </div>
    </div>
  );
}

export default App;
