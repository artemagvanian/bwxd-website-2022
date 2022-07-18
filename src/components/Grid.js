import { times } from "lodash";

import * as styles from "./Grid.module.scss";

export function Grid({ children, className }) {
  return (
    <div className={`${styles.grid} ${className ? className : ""}`}>
      {children}
    </div>
  );
}

export function MobileGrid({ children, className }) {
  return (
    <div className={`${styles.mobileGrid} ${className ? className : ""}`}>
      {children}
    </div>
  );
}

export function Cell({ children, className }) {
  return (
    <div className={`${styles.cell} ${className ? className : ""}`}>
      {children}
    </div>
  );
}

export function Triangle({ className }) {
  return (
    <svg
      className={`${styles.triangle} ${className ? className : ""}`}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
    >
      <polygon points="0 0, 0 100, 100 100" />
    </svg>
  );
}

export function DiagonalCell({ className }) {
  return (
    <svg
      className={`${styles.diagonalCell} ${className ? className : ""}`}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
    >
      <line x1="0" y1="0" x2="100" y2="100" />
    </svg>
  );
}

export function NHomeCell({ n }) {
  return (
    <>
      {times(n, (i) => (
        <Cell key={i} className={styles.homeCell} />
      ))}
    </>
  );
}

export function NBlueCell({ n }) {
  return (
    <>
      {times(n, (i) => (
        <Cell key={i} className={styles.blueCell} />
      ))}
    </>
  );
}

export function NBlueOutlinedCell({ n }) {
  return (
    <>
      {times(n, (i) => (
        <Cell key={i} className={styles.blueOutlinedCell} />
      ))}
    </>
  );
}
