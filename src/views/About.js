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
        {/* <NOrangeCell n={10} /> */}
        <NHomeCell n={20} />
        <div className={styles.emptyBoxOne}></div>
        <NHomeCell n={2} />
        {/* <div className={styles.vertBoxOne}><h1>Who we are</h1></div> */}
        <div className={styles.vertBox}>
          <h1>Who we are</h1>
        </div>
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
        <NHomeCell n={1} />
        <NOrangeCell n={1} />
        <NHomeCell n={13} />
        <div className={styles.vertBoxTwo}>
          <h1>What we do</h1>
        </div>
        <div className={styles.imageThree}></div>
        <NHomeCell n={5} />
        <div className={styles.emptyBoxTwo}></div>
        <NHomeCell n={9} />
        <div className={styles.whatWeDo}>
          <p>
            During the year, we facilitate workshops, panels, and discussions
            that engage in and promote design. These events culminate in an
            annual two-day conference that brings together designers, curators,
            scientists, makers, academics and students from across the country
            to inspire further conversation.
          </p>
        </div>
        <NHomeCell n={8} />
        <div className={styles.filledBoxTwo}></div>
        <NHomeCell n={4} />
        <div className={styles.emptyBoxThree}></div>
        <NHomeCell n={5} />
        <div className={styles.ourStory}>
          <p>
            In 2008, Sharon Langevin (Brown ’09), Steve Daniels (Brown ’09),
            Tino Chow (RISD ’09) and Mike Eng (RISD ’09) founded Better World by
            Design to merge their fields and solve social problems from a
            holistic perspective. Over the years, Better World by Design has
            expanded its reach while fostering a close partnership between
            Brown, RISD, and the Providence community.
          </p>
        </div>
        <div className={styles.vertBoxThree}>
          <h1>Our Story</h1>
        </div>
        <NHomeCell n={17} />
      </Grid>
    </div>
  );
}
export default About;
