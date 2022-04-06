import * as _ from "lodash";
//import React, { useState, useEffect } from "react";
import { Grid, Cell, Triangle } from "../components/Grid";
import * as styles from "./Sponsors.module.css";

export function Sponsors() {
  return (
    <div>
      {" "}
      <h1>sponsors</h1>
      <Grid>
        {/* {_.times(15, (i) => (
        <Triangle key={i} className={styles.homeTriangle} />
      ))} */}
        {_.times(15, (i) => (
          <Cell key={i} className={styles.homeCell} />
        ))}
        {_.times(15, (i) => (
          <Cell key={i} className={styles.homeCell} />
        ))}
        {_.times(2, (i) => (
          <Cell key={i} className={styles.homeCell} />
        ))}
      </Grid>
    </div>
  );
}
export default Sponsors;
