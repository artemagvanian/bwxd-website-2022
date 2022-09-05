import Spline from "@splinetool/react-spline";

import {
  Grid,
  Cell,
  Triangle,
  MobileGrid,
  DiagonalCell,
  NBlueCell,
  NHomeCell,
} from "../components/Grid";
import { MobileNav } from "../components/MobileNav";
import { SpeakerA, SpeakerB } from "../components/Speaker";

import * as styles from "./Home.module.scss";
import * as mobileStyles from "./Home.mobile.module.scss";

import { BREAKPOINT } from "../App";

const hero = new URL("../assets/hero.svg", import.meta.url);
const homeBodyMobile = new URL(
  "../assets/placeholders/home-body-mobile.svg",
  import.meta.url
);

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

function TriangleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100">
      <polygon points="50,20 15,80 85,80" fill="#2d2ff5" />
    </svg>
  );
}

function CircleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100">
      <ellipse cx="50" cy="50" rx="30" ry="30" fill="#2d2ff5" />
    </svg>
  );
}

function SquareIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100">
      <polygon points="20,20 80,20 80,80 20,80" fill="#2d2ff5" />
    </svg>
  );
}

function Hero() {
  function onLoad(spline) {
    const zoom = 0.9 / 1000;
    spline.setZoom(zoom * window.innerWidth);
  }

  return (
    <div className={styles.heroContainer}>
      <object className={styles.hero} data={hero} type="image/svg+xml" />
      <Spline
        className={styles.heroSpline}
        onLoad={onLoad}
        scene="https://prod.spline.design/8YOehY3Q7LzRE6J1/scene.spline"
      />
    </div>
  );
}

function MobileHero() {
  return <object className={styles.hero} data={hero} type="image/svg+xml" />;
}

function MobileHome() {
  return (
    <>
      <MobileNav />
      <MobileHero />
      <MobileGrid>
        <NHomeCell n={1} />
        <div className={mobileStyles.goal}>
          <p>
            Our goal is to reframe the way we see design, and through design,
            reframe interventions in the world's contemporary issues. We've
            chosen Re-Frame for this year's theme as an opportunity to highlight
            overlooked narratives and initiate change through new perspectives.
          </p>
        </div>
        <div className={mobileStyles.whyReframe}>
          <h2>Why Re-Frame?</h2>
        </div>
        <NHomeCell n={17} />
        <DiagonalCell className={mobileStyles.diagonalCell} />
        <Cell className={mobileStyles.longCell} />
        <Triangle className={mobileStyles.smallTriangle} />
        <Cell className={mobileStyles.blueCell} />
        <NHomeCell n={2} />
        <div className={mobileStyles.context}>
          <h2>
            How can design and social practices challenge traditional
            boundaries.
          </h2>
        </div>
        <NHomeCell n={6} />
        <Cell className={mobileStyles.bigCell} />
        <div className={mobileStyles.use}>
          <CircleIcon />
          <h2>Use</h2>
        </div>
        <NHomeCell n={3} />
        <div className={mobileStyles.purpose}>
          <SquareIcon />
          <h2>Purpose</h2>
        </div>
        <NHomeCell n={2} />
        <div className={mobileStyles.understanding}>
          <TriangleIcon />
          <h2>Understanding</h2>
        </div>
        <NHomeCell n={9} />
        <div className={mobileStyles.power}>
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
        <NBlueCell n={8} />
      </MobileGrid>
      <div className={mobileStyles.stepOutContainer}>
        <div className={mobileStyles.stepOutElement}>
          <h2>How do you step outside of the "frame"?</h2>
        </div>
        <MobileGrid>
          <NHomeCell n={45} />
        </MobileGrid>
      </div>
    </>
  );
}

function DesktopHome() {
  function onTextLoad(spline) {
    const zoom = 0.75 / 1000;
    spline.setZoom(zoom * window.innerWidth);
  }

  return (
    <>
      <Hero />
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
      <Spline
        className={styles.spline}
        onLoad={onTextLoad}
        scene="https://prod.spline.design/PHcDh7LB4SnDataV/scene.spline"
      />
    </>
  );
}

function DesktopHomePlaceholder() {}

function MobileHomePlaceholder() {
  return (
    <>
      <MobileNav />
      <object
        className={mobileStyles.homeBodyMobile}
        data={homeBodyMobile}
        type="image/svg+xml"
      />
    </>
  );
}

export function Home() {
  const width = window.innerWidth;
  return width < BREAKPOINT ? <MobileHomePlaceholder /> : <DesktopHome />;
}

export default Home;
