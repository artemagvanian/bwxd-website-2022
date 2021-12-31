import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { TabItem, Tabs } from "../Tabs";

const sampleTabs = (
  <Tabs defaultIndex="1">
    <TabItem label="A" index="1">
      Text A
    </TabItem>
    <TabItem label="B" index="2">
      Text B
    </TabItem>
    <TabItem label="C" index="3">
      Text C
    </TabItem>
  </Tabs>
);

test("renders the tabs correctly", () => {
  render(sampleTabs);
  expect(screen.getByText("Text A")).toBeVisible();
  expect(screen.getByText("Text B")).not.toBeVisible();
  expect(screen.getByText("Text C")).not.toBeVisible();
});

test("changes the tab on click", () => {
  render(sampleTabs);

  userEvent.click(screen.getByText("B"));

  expect(screen.getByText("Text A")).not.toBeVisible();
  expect(screen.getByText("Text B")).toBeVisible();
  expect(screen.getByText("Text C")).not.toBeVisible();

  userEvent.click(screen.getByText("C"));

  expect(screen.getByText("Text A")).not.toBeVisible();
  expect(screen.getByText("Text B")).not.toBeVisible();
  expect(screen.getByText("Text C")).toBeVisible();

  userEvent.click(screen.getByText("A"));

  expect(screen.getByText("Text A")).toBeVisible();
  expect(screen.getByText("Text B")).not.toBeVisible();
  expect(screen.getByText("Text C")).not.toBeVisible();
});

test("does not change the tab if the currently active link is clicked", () => {
  render(sampleTabs);

  userEvent.click(screen.getByText("A"));

  expect(screen.getByText("Text A")).toBeVisible();
  expect(screen.getByText("Text B")).not.toBeVisible();
  expect(screen.getByText("Text C")).not.toBeVisible();
});

test("does not render non-TabItem elements", () => {
  render(
    <Tabs defaultIndex="1">
      <TabItem label="A" index="1">
        Text A
      </TabItem>
      <TabItem label="B" index="2">
        Text B
      </TabItem>
      <div label="C" index="3">
        Text C
      </div>
    </Tabs>
  );

  expect(screen.queryByText("Text C")).not.toBeInTheDocument();
});
