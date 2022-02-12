import React, { useEffect, useRef } from "react";
import animation from "../data/animationexample.json";
import styled from "styled-components";
import lottie from "lottie-web";

const AnimationContainer = styled.div`
  width: 500px;
  height: 500px;
`;

export const LottieAnimation = () => {
  const container = useRef(null);

  useEffect(() => {
    const animationObject = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
    });
    animationObject.play();
  });

  return <AnimationContainer ref={container}></AnimationContainer>;
};
