import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import * as styles from "./Nav.module.scss";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/about">
        About
      </Link>
      <Link className={styles.link} to="/sponsors">
        Sponsors
      </Link>
      <a className={`${styles.link} ${styles.join}`} href="">
        Join
      </a>
    </nav>
  );
}
