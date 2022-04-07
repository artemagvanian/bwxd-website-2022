import * as _ from "lodash";
//import React, { useState, useEffect } from "react";
import { Grid, Cell, Triangle } from "../components/Grid";
import * as styles from "./Sponsors.module.css";

export function Sponsors() {
  return (
    <div>
      {" "}
      <Grid>
        {_.times(15, (i) => (
          <Cell key={i} className={styles.homeCell} />
        ))}
        {_.times(15, (i) => (
          <Cell key={i} className={styles.homeCell} />
        ))}

        {_.times(1, (i) => (
          <Cell key={i} className={styles.homeCell} />
        ))}
      </Grid>
      <div className={styles.mainHeading}>Sponsors</div>
      <div className={styles.subHeading}>Why Sponsor Us?</div>
      <Grid>
        {_.times(1, (i) => (
          <Cell key={i} className={styles.homeCell} />
        ))}
      </Grid>
    </div>
  );
}
export default Sponsors;
