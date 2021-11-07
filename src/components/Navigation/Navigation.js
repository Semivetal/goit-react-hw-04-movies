import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <>
    <NavLink
      to="/"
      exact
      className={styles.navLink}
      activeClassName={styles.navActiveLink}
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      exact
      className={styles.navLink}
      activeClassName={styles.navActiveLink}
    >
      Movies
    </NavLink>
  </>
);

export default Navigation;
