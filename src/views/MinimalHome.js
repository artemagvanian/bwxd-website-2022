import * as _ from "lodash";
import Spline from "@splinetool/react-spline";
import React, { useState, useEffect } from "react";
import * as styles from "./MinimalHome.module.scss";
import hero from "../assets/hero.svg";

export function MinimalHome() {
  function onLoad(spline) {
    const zoom = 1 / 1000;
    spline.setZoom(zoom * window.innerWidth);
  }

  return (
    <div className={styles.container}>
      <img src={hero} alt="BWxD 2022 Hero" />
      <Spline
        className={styles.spline}
        onLoad={onLoad}
        scene="https://prod.spline.design/8YOehY3Q7LzRE6J1/scene.spline"
      />
    </div>
  );
}

export default MinimalHome;
