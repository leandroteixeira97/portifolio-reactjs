// React
import { NavLink, Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <p>
        <Link to="/" className={styles.navbar_logo}>
          <span>Leandro</span> Aquino
        </Link>
      </p>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutme">Sobre mim</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projetos</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;