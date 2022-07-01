import { NavLink } from "react-router-dom";
import Freinds from "./Freinds/Freinds";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={s.container}>
      <nav className={s.nav}>
        <div>
          <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
        </div>
        <div>
          <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
        </div>
        <div>
          <NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
        </div>
        <div>
          <NavLink to="/users" className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
        </div>
        <div>
          <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
        </div>
      </nav>
      <div >
        <h2 className={s.titel}>Freinds</h2> 
        <Freinds />
      </div>
      
    </div>)
};

export default Navbar;


