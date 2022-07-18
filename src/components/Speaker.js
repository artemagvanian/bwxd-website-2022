import { Grid, NBlueOutlinedCell } from "./Grid";

import * as styles from "./Speaker.module.scss";

export function SpeakerA({ name, position, photo }) {
  return (
    <Grid>
      <NBlueOutlinedCell n={16} />
      <div className={styles.position}>
        <h2>{position}</h2>
      </div>
      <div className={styles.horizontalWhiteBlock} />
      <NBlueOutlinedCell n={1} />
      <div className={styles.name}>
        <h2>{name}</h2>
      </div>
      <NBlueOutlinedCell n={1} />
      <div
        className={styles.photo}
        style={{ backgroundImage: `url("${photo}")` }}
      />
      <div className={styles.bigBlueBlock} />
      <NBlueOutlinedCell n={1} />
      <div className={styles.verticalWhiteBlock} />
      <NBlueOutlinedCell n={10} />
    </Grid>
  );
}

export function SpeakerB({ name, position, photo }) {
  return (
    <Grid>
      <NBlueOutlinedCell n={1} />
      <div className={styles.hugeBlueBlock} />
      <NBlueOutlinedCell n={3} />
      <div className={styles.bigBlueBlock} />
      <NBlueOutlinedCell n={5} />
      <div
        className={styles.altPhoto}
        style={{ backgroundImage: `url("${photo}")` }}
      />
      <NBlueOutlinedCell n={1} />
      <div className={styles.altName}>
        <h2>{name}</h2>
      </div>
      <div className={styles.smallWhiteCell} />
      <div className={styles.altPosition}>
        <h2>{position}</h2>
      </div>
      <NBlueOutlinedCell n={15} />
    </Grid>
  );
}
