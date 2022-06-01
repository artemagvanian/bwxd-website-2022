import { times } from "lodash";

import { Grid, Cell } from "../components/Grid";
import * as styles from "./Sponsors.module.scss";

function NHomeCell({ n }) {
  return (
    <>
      {times(n, (i) => (
        <Cell key={i} className={styles.homeCell} />
      ))}
    </>
  );
}

function NBlueCell({ n }) {
  return (
    <>
      {times(n, (i) => (
        <Cell key={i} className={styles.blueCell} />
      ))}
    </>
  );
}

export function Sponsors() {
  return (
    <div>
      {" "}
      <Grid>
        <NHomeCell n={15} />
        <NHomeCell n={15} />
        {/* sandwich ways of adding boxes */}
        <NHomeCell n={1} />
        <div className={styles.mainHeading}>
          <h1>Sponsors</h1>
        </div>
        <NHomeCell n={1} />
        {/* sandwich ways of adding boxes */}
        <NHomeCell n={15} />
        <div className={styles.subHeading}>
          <h2>Why Sponsor Us?</h2>
        </div>
        <div className={styles.filledBoxOne}></div>
        <NHomeCell n={12} />
        <div className={styles.emptyBoxOne}></div>
        <div className={styles.imageOne}></div>
        <div className={styles.connect}>
          <h2>Connect</h2>
          <p>
            With talented designers, artists, engineers, and entrepreneurs from
            across the country and around the world.
          </p>
        </div>
        <NHomeCell n={3} />
        <NHomeCell n={3} />
        <div className={styles.influence}>
          <h2>Influence</h2>
          <p>And work with innovators for creative business solutions.</p>
        </div>
        <NHomeCell n={3} />
        <div className={styles.recruit}>
          <h2>Recruit</h2>
          <p>Students from Brown, RISD, and other top-tier universities.</p>
        </div>
        <div className={styles.imageTwo}></div>

        <div className={styles.emptyBoxTwo}></div>
        <NHomeCell n={2} />
        <NHomeCell n={2} />
        <div className={styles.filledBoxTwo}></div>
        <div className={styles.establish}>
          <h2>Establish</h2>
          <p>A lasting presence with future change-makers in the Northeast.</p>
        </div>
        <NHomeCell n={7} />
        <NHomeCell n={7} />
        <NHomeCell n={15} />
        <NHomeCell n={2} />
        <div className={styles.prevPartners}>
          <h2>Previous Partners</h2>
        </div>
        {/* some issue!! */}
        <div className={styles.imageThree}></div>
        <NHomeCell n={2} />
        <NHomeCell n={2} />
        <NHomeCell n={2} />
        <NBlueCell n={2} />
        <NBlueCell n={2} />
        <NBlueCell n={2} />

        {/* <div className={styles.filledBoxThree}></div> */}
        <NHomeCell n={15} />
      </Grid>
    </div>
  );
}
export default Sponsors;
