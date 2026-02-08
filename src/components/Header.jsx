import { NavLink, Link } from "react-router-dom";
import userImg from "../assets/images/avatar-icon.png";

function Navbar() {
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "my-link" : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "my-link" : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "my-link" : null)}
          to="/vans"
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={userImg} className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
}

export default Navbar;
