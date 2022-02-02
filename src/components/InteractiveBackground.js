import React, { useEffect, useRef } from "react";
import { CanvasSpace, Num } from "pts";
import styled from "styled-components";

const CommonContainer = styled.div`
  position: relative;
`;

const BackgroundContainer = styled.canvas`
  position: absolute;
`;

const ContentContainer = styled.div`
  position: relative;
  pointer-events: none;
`;

export const InteractiveBackground = ({ children }) => {
  const canvas = useRef(null);

  useEffect(() => {
    let space = new CanvasSpace(canvas.current);
    let form = space.getForm();

    space.setup({ bgcolor: "#fff", retina: true, resize: true });
    space.add((time, _) => {
      let radius = Num.cycle((time % 1000) / 1000) * 20;
      form.fill("#09f").point(space.pointer, radius, "circle");
    });

    space.bindMouse().bindTouch().play();
  });

  return (
    <CommonContainer>
      <BackgroundContainer ref={canvas} />
      <ContentContainer>{children}</ContentContainer>
    </CommonContainer>
  );
};
