import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Tooltip } from "../Tooltip";

const sampleDescription = (
  <div>
    <h3>Title</h3>
    <p>Content</p>
  </div>
);

const sampleTooltip = <Tooltip content={sampleDescription}>Hover me!</Tooltip>;

test("tooltip is initially invisible", () => {
  render(sampleTooltip);

  expect(screen.getByText("Title")).not.toBeVisible();
  expect(screen.getByText("Content")).not.toBeVisible();
});

test("tooltip gets visible only if hovered", () => {
  render(sampleTooltip);

  userEvent.hover(screen.getByText("Hover me!"));
  expect(screen.getByText("Title")).toBeVisible();
  expect(screen.getByText("Content")).toBeVisible();
  userEvent.unhover(screen.getByText("Hover me!"));
  expect(screen.getByText("Title")).not.toBeVisible();
  expect(screen.getByText("Content")).not.toBeVisible();
});
