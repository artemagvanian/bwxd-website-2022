import * as _ from "lodash";
//import React, { useState, useEffect } from "react";
import { Grid, Cell, Triangle } from "../components/Grid";
import * as styles from "./Home.module.css";

export function Home() {
  return (
    <Grid>
      {_.times(15, (i) => (
        <Triangle key={i} className={styles.homeTriangle} />
      ))}
      {_.times(15, (i) => (
        <Cell key={i} className={styles.homeCell} />
      ))}
    </Grid>
  );
}

export default Home;
