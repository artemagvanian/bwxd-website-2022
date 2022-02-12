import { ThreeExample } from "../components/ThreeExample";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500px;
`;

export function ThreeView() {
  return (
    <Container>
      <ThreeExample></ThreeExample>
    </Container>
  );
}
