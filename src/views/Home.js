import * as _ from "lodash";
import Spline from "@splinetool/react-spline";
import React, { useState, useEffect } from "react";
import { Grid, Cell, Triangle } from "../components/Grid";
import * as styles from "./Home.module.scss";

function DecorativeFigure({ className }) {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 200 200">
      <polygon
        points="0 0, 200 0, 200 200"
        fill="#fefced"
        stroke="#2d2ff5"
        strokeWidth="2px"
      />
      <polygon
        points="0 0, 100 100, 0 100"
        fill="#fefced"
        stroke="#2d2ff5"
        strokeWidth="2px"
      />
      <polygon
        points="0 100, 100 100, 100 200, 0 200"
        fill="#fefced"
        stroke="#2d2ff5"
        strokeWidth="2px"
      />
      <polygon
        points="100 100, 200 200, 100 200"
        fill="#2d2ff5"
        stroke="#2d2ff5"
        strokeWidth="2px"
      />
    </svg>
  );
}

function NHomeCell({ n }) {
  return (
    <>
      {_.times(n, (i) => (
        <Cell key={i} className={styles.homeCell} />
      ))}
    </>
  );
}

function NBlueCell({ n }) {
  return (
    <>
      {_.times(n, (i) => (
        <Cell key={i} className={styles.blueCell} />
      ))}
    </>
  );
}

export function Home() {
  function onTextLoad(spline) {
    const zoom = 0.75 / 1000;
    spline.setZoom(zoom * window.innerWidth);
  }

  return (
    <>
      <Grid>
        {/* row */}
        <NHomeCell n={15} />
        {/* row */}
        <div className={styles.whyReframe}>
          <h2>Why Reframe?</h2>
        </div>
        <NHomeCell n={3} />
        {/* row */}
        <DecorativeFigure className={styles.decorativeFigure} />
        <div className={styles.goal}>
          <p>
            Our goal is to reframe the way we see design, and through design,
            reframe interventions in the world's contemporary issues. We've
            chosen Re-Frame for this year's theme as an opportunity to highlight
            overlooked narratives and initiate change through new perspectives.
          </p>
        </div>
        <Triangle className={styles.bigTriangle} />
        <Cell className={styles.bigCell} />
        <NHomeCell n={6} />
        {/* row */}
        <NHomeCell n={1} />
        <NBlueCell n={2} />
        <div className={styles.context}>
          <p>
            Through the context of the “frame,” we consider how design and
            social practices can challenge traditional boundaries.
          </p>
        </div>
        <NHomeCell n={1} />
        <NBlueCell n={2} />
        <NHomeCell n={1} />
        <NBlueCell n={2} />
        <NHomeCell n={1} />
        <NBlueCell n={2} />
        {/* row */}
        <NHomeCell n={1} />
        <NBlueCell n={2} />
        <NHomeCell n={12} />
        {/* row */}
        <NHomeCell n={1} />
        <NBlueCell n={1} />
        <div className={styles.how}>
          <h2>How can we reframe use, purpose, and understanding?</h2>
          <p>
            We recognize the power in recontextualizing our understanding of
            preexisting systems and methodologies. <br /> <br />
            Our goal is to generate discussion around what frames enclose and
            exclude, and examine how voices can be pulled to the forefront
            through collaborative problem solving. We hope to explore practices
            that challenge and disrupt traditional conventions, amplify
            historically underrepresented voices, and draw attention to local
            and global inequalities. To drive our exploration, we bring together
            a diverse community of critical thinkers.
          </p>
        </div>
        <NHomeCell n={6} />
        <NBlueCell n={1} />
        <NHomeCell n={6} />
        <NBlueCell n={1} />
        <NHomeCell n={6} />
        <NBlueCell n={1} />
        <NHomeCell n={6} />
        <NBlueCell n={1} />
        <NHomeCell n={6} />
        <NBlueCell n={2} />
        <NHomeCell n={4} />
        <div className={styles.applications}>
          <p>
            Re-framing can be applied at many different levels of design
            practice. We have identified a few frameworks through which reframe
            can be understood in relation to your work. This is not meant to
            inhibit you, but rather to initiate a thought-provoking connection
            between your work and the conference's theme.
          </p>
        </div>
        <NHomeCell n={9} />
      </Grid>
      {/* <div className={styles.splineContainer}> */}
      <Spline
        className={styles.spline}
        onLoad={onTextLoad}
        scene="https://prod.spline.design/PHcDh7LB4SnDataV/scene.spline"
      />
      {/* <Grid>
          <NHomeCell n={120} />
        </Grid> */}
      {/* </div> */}
    </>
  );
}

export default Home;
