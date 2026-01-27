import { NavLink, Link } from "react-router-dom";

function Navbar() {
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
      </nav>
    </header>
  );
}

export default Navbar;
