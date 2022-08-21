import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={s.container}>
      <nav className={s.nav}>
        <div>
          <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
        </div>
        <div>
          <NavLink to="/chat" className={navData => navData.isActive ? s.active : s.item}>Chat</NavLink>
        </div>
        <div>
          <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
        </div>
        <div>
          <NavLink to="/users" className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
        </div>
      </nav>
    </div>)
};

export default Navbar;


