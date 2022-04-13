import * as _ from "lodash";
//import React, { useState, useEffect } from "react";
import { Grid, Cell, Triangle } from "../components/Grid";
import * as styles from "./About.module.scss";

function NHomeCell({ n }) {
  return (
    <>
      {_.times(n, (i) => (
        <Cell key={i} className={styles.homeCell} />
      ))}
    </>
  );
}

function NOrangeCell({ n }) {
  return (
    <>
      {_.times(n, (i) => (
        <Cell key={i} className={styles.blueCell} />
      ))}
    </>
  );
}

export function About() {
  return (
    <div>
      {" "}
      <Grid>
        <NHomeCell n={15} />
        <NHomeCell n={15} />
        <NHomeCell n={1} />
        <div className={styles.mainHeading}>
          <h1>About</h1>
        </div>
        <NHomeCell n={8} />
        <div className={styles.imageOne}></div>
        <NHomeCell n={20} />
        <div className={styles.emptyBoxOne}></div>
        <NHomeCell n={2} />
        {/* <div className={styles.vertBoxOne}><h1>Who we are</h1></div> */}
        <NHomeCell n={1} />
        <div className={styles.aboutPara}>
          <p>
            Better World by Design is a student-led initiative at Brown
            University and Rhode Island School of Design that celebrates the
            interdisciplinary collaboration between designers, educators,
            innovators, and learners. We envision a world where design-thinking
            is accessible to everyone and aim to discuss, educate, and explore
            ways that design can center alternative narratives. Through our
            efforts, we hope to catalyze transformative change on local and
            global scales.
          </p>
        </div>
        <div className={styles.imageTwo}></div>
        {/* <NHomeCell n={1} />
        <NOrangeCell n={1} />
        <NHomeCell n={13} /> */}
      </Grid>
    </div>
  );
}
export default About;
