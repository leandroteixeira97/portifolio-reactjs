// React
import { NavLink, Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <p>
        <Link to="/portifolio-reactjs/" className={styles.navbar_logo}>
          <span>Leandro</span> Aquino
        </Link>
      </p>
      <ul>
        <li>
          <NavLink to="/portifolio-reactjs/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/portifolio-reactjs/aboutme">Sobre mim</NavLink>
        </li>
        <li>
          <NavLink to="/portifolio-reactjs/projects">Projetos</NavLink>
        </li>
        <li>
          <NavLink to="/portifolio-reactjs/contact">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;