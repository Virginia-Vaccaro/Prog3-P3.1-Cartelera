// utilizar el componente <Link> de React Router
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">🎬 Cine Rosario</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Cartelera</Link>
        </li>
        <li>
          <Link to="/newMovie">Nueva Película</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
