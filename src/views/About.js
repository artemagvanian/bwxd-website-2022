import * as _ from "lodash";
import React, { useState, useEffect } from "react";
import { Grid, Cell, Triangle } from "../components/Grid";
import * as styles from "./About.module.scss";
import data from "../data/bios.json";
import helen from "../assets/imgs/cochairs/helen.jpg";
import sophia from "../assets/imgs/cochairs/sophia.jpg";
import selena from "../assets/imgs/cochairs/selena.jpg";
import alex from "../assets/imgs/content/alex.jpg";
import amy from "../assets/imgs/content/amy.jpg";
import henry from "../assets/imgs/content/henry.jpg";
import jesse from "../assets/imgs/content/jesse.jpg";
import natalia from "../assets/imgs/content/natalia.jpg";
import alyssa from "../assets/imgs/development/alyssa.jpg";
import christine from "../assets/imgs/development/christine.jpg";
import ryan_p from "../assets/imgs/development/ryan_p.jpg";
import grace from "../assets/imgs/graphics/grace.jpg";
import ryan_y from "../assets/imgs/graphics/ryan_y.jpg";
import kayla from "../assets/imgs/graphics/kayla.jpg";
import joanne from "../assets/imgs/ops/joanne.jpg";
import rebecca from "../assets/imgs/ops/rebecca.jpg";
import will from "../assets/imgs/ops/will.jpg";
import yihan from "../assets/imgs/ops/yihan.jpg";
import rachael from "../assets/imgs/pr/rachael.jpg";
import ellie from "../assets/imgs/pr/ellie.jpg";
import christie from "../assets/imgs/se/christie.jpg";
import raphael from "../assets/imgs/se/raphael.jpg";
import aanchal from "../assets/imgs/web/aanchal.jpg";
import artem from "../assets/imgs/web/artem.jpg";
import lauren from "../assets/imgs/web/lauren.jpg";
import kelly from "../assets/imgs/ce/kelly.jpg";
import yuheng from "../assets/imgs/ce/yuheng.jpg";

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
function NEmptyCell({ n }) {
  return (
    <>
      {_.times(n, (i) => (
        <Cell key={i} className={styles.emptyCell} />
      ))}
    </>
  );
}

function renderProfile(id, profilePic) {
  return (
    <>
      <div className={styles.committeeSpacer}></div>
      <div className={styles.committeeIntro}>
        <p className={styles.personIntro}>
          {data[id].school}, <i>{data[id].pronouns}</i>
        </p>
      </div>
      <div className={styles.profile}>
        <img src={profilePic} className={styles.introPic}></img>
        <p className={styles.personName}>{data[id].name}</p>
      </div>
    </>
  );
}

function renderSpacer() {
  return <div className={styles.committeeSpacer}></div>;
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
        <NEmptyCell n={11} />
        <NHomeCell n={3} />
        <div className={styles.emptyBoxOne}></div>
        <NHomeCell n={2} />
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
        <div className={styles.filledBoxOne}></div>
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
        <NHomeCell n={15} />
        <div className={styles.team}>
          <h1>2022 Re-Frame</h1>
        </div>
        <NHomeCell n={15} />
        <NHomeCell n={15} />

        <div className={styles.committeeLabel}>
          <p className={styles.committee}>Co-Chairs</p>
        </div>
        {renderProfile(0, helen)}
        {renderProfile(1, sophia)}
        {renderProfile(2, selena)}
        {renderSpacer()}
        <NHomeCell n={15} />

        <div className={styles.committeeLabel}>
          <p className={styles.committee}>Content</p>
        </div>
        {renderProfile(3, amy)}
        {renderProfile(4, alex)}
        {renderProfile(5, jesse)}
        {renderSpacer()}
        <NHomeCell n={15} />
        {renderSpacer()}
        {renderSpacer()}
        {renderProfile(6, natalia)}
        {renderProfile(7, henry)}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        <NHomeCell n={15} />

        <div className={styles.committeeLabel}>
          <p className={styles.committee}>Dev</p>
        </div>
        {renderProfile(9, ryan_p)}
        {renderProfile(10, christine)}
        {renderProfile(11, alyssa)}
        {renderSpacer()}
        <NHomeCell n={15} />

        <div className={styles.committeeLabel}>
          <p className={styles.committee}>Ops</p>
        </div>
        {renderProfile(12, rebecca)}
        {renderProfile(13, will)}
        {renderProfile(14, joanne)}
        {renderSpacer()}
        <NHomeCell n={15} />
        {renderSpacer()}
        {renderSpacer()}
        {renderProfile(15, yihan)}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        <NHomeCell n={15} />

        <div className={styles.committeeLabel}>
          <p className={styles.committee}>CE</p>
        </div>
        {renderProfile(16, kelly)}
        {renderProfile(17, yuheng)}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        <NHomeCell n={15} />

        <div className={styles.committeeLabel}>
          <p className={styles.committee}>Social</p>
        </div>
        {renderProfile(19, raphael)}
        {renderProfile(20, christie)}
        {renderProfile(21)}
        {renderSpacer()}
        <NHomeCell n={15} />

        <div className={styles.committeeLabel}>
          <p className={styles.committee}>PR</p>
        </div>
        {renderProfile(22, ellie)}
        {renderProfile(23, rachael)}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        {renderSpacer()}
        <NHomeCell n={15} />

        <div className={styles.committeeLabel}>
          <p className={styles.committee}>Graphics</p>
        </div>
        {renderProfile(24, ryan_y)}
        {renderProfile(25, grace)}
        {renderProfile(26, kayla)}
        {renderSpacer()}
        <NHomeCell n={15} />

        <div className={styles.committeeLabel}>
          <p className={styles.committee}>Web</p>
        </div>
        {renderProfile(27, artem)}
        {renderProfile(28, aanchal)}
        {renderProfile(29, lauren)}
        {renderSpacer()}
        <NHomeCell n={15} />

        <NOrangeCell n={15} />
        <NOrangeCell n={15} />
        <NOrangeCell n={15} />
        <NOrangeCell n={15} />
        <div className={styles.pastConferences}>
          <h1 className={styles.redText}>Past Conferences</h1>
        </div>
        <NOrangeCell n={12} />
        <NOrangeCell n={15} />

        <NOrangeCell n={2} />
        <div className={styles.conference}>
          <h1 className={styles.year}>2021</h1>
          <h1 className={styles.title}>
            <a href="http://betterworldxdesign.com/conference2021.html">
              SEAMS
            </a>
          </h1>
        </div>
        <NOrangeCell n={3} />

        <NOrangeCell n={3} />
        <div className={styles.conference}>
          <h1 className={styles.year}>2019</h1>
          <h1 className={styles.title}>
            <a href="http://betterworldxdesign.com/conference2019.html">
              Noise
            </a>
          </h1>
        </div>
        <NOrangeCell n={2} />

        <NOrangeCell n={4} />
        <div className={styles.conference}>
          <h1 className={styles.year}>2018</h1>
          <h1 className={styles.title}>
            <a href="http://betterworldxdesign.com/conference2018.html">
              Tension
            </a>
          </h1>
        </div>
        <NOrangeCell n={1} />

        <NOrangeCell n={5} />
        <div className={styles.conference}>
          <h1 className={styles.year}>2017</h1>
          <h1 className={styles.blocks}>
            <a href="http://betterworldxdesign.com/conference2017.html">
              Blocks, Bytes, and Bars
            </a>
          </h1>
        </div>

        <NOrangeCell n={15} />
        <NOrangeCell n={15} />
      </Grid>
    </div>
  );
}
export default About;
