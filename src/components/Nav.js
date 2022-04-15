import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import * as styles from "./Nav.module.scss";

export function Nav({ color }) {
  const colorVariants = {
    blue: styles.blue,
    red: styles.red,
    green: styles.green,
  };
  return (
    <nav className={`${styles.nav} ${colorVariants[color]}`}>
      <div className={`${styles.logo} ${colorVariants[color]}`}>
        <img src={logo} alt="logo" />
      </div>
      <Link className={`${styles.link} ${colorVariants[color]}`} to="/">
        Home
      </Link>
      <Link className={`${styles.link} ${colorVariants[color]}`} to="/about">
        About
      </Link>
      <Link className={`${styles.link} ${colorVariants[color]}`} to="/sponsors">
        Sponsors
      </Link>
      <a
        className={`${styles.link} ${styles.join} ${colorVariants[color]}`}
        href=""
      >
        Join
      </a>
    </nav>
  );
}
