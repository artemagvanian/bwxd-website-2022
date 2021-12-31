import React, { useState } from "react";
import styled from "styled-components";

const TooltipContainer = styled.div`
  position: relative;
  max-width: 300px;
`;

const TooltipBox = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  top: calc(100% + 5px);
  display: none;

  &.visible {
    display: block;
  }
`;

const TooltipArrow = styled.span`
  position: absolute;
  top: -10px;
  left: 10%;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
`;

const TooltipTarget = styled.div``;

export const Tooltip = ({ children, content, ...rest }) => {
  const [show, setShow] = useState(false);

  return (
    <TooltipContainer>
      <TooltipBox className={show ? "visible" : ""}>
        {content}
        <TooltipArrow />
      </TooltipBox>
      <TooltipTarget
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        {...rest}
      >
        {children}
      </TooltipTarget>
    </TooltipContainer>
  );
};
