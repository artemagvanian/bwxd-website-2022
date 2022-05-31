import * as styles from "./Grid.module.scss";

export function Grid({ children, className }) {
  return (
    <div className={`${styles.grid} ${className ? className : ""}`}>
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
