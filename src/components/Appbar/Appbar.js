import Navigation from "../Navigation/Navigation";
import styles from "./Appbar.module.css";

const Appbar = () => (
  <header className={styles.header}>
    <Navigation />
  </header>
);

export default Appbar;
