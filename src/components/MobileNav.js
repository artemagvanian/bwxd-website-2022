import { useState } from "react";

import { Link } from "react-router-dom";

import * as styles from "./MobileNav.module.scss";

const logo = new URL("../assets/logo_large.svg", import.meta.url);
const sandwich = new URL("../assets/sandwich.svg", import.meta.url);
const cross = new URL("../assets/cross.svg", import.meta.url);

export function MobileNav({ color }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        {open ? (
          <div
            className={styles.cross}
            onClick={() => {
              setOpen(false);
            }}
          >
            <img src={cross} alt="cross" />
          </div>
        ) : (
          <div
            className={styles.sandwich}
            onClick={() => {
              setOpen(true);
            }}
          >
            <img src={sandwich} alt="sandwich" />
          </div>
        )}
      </nav>
      {open && (
        <div className={styles.menu}>
          <div className={styles.linkBlock}>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </div>
          <div className={styles.linkBlock}>
            <Link className={styles.link} to="/about">
              About
            </Link>
          </div>
          <div className={styles.linkBlock}>
            <Link className={styles.link} to="/sponsors">
              Sponsors
            </Link>
          </div>
          <div className={styles.linkBlock}>
            <a
              className={`${styles.link} ${styles.join}`}
              href="mailto:hello@betterworldxdesign.com"
            >
              Join
            </a>
          </div>
        </div>
      )}
    </>
  );
}
