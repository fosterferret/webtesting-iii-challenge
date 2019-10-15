import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Controls from "../controls/Controls";
import Display from "../display/Display";
import Dashboard from "./Dashboard";
import * as redux from "../redux";
import "@testing-library/jest-dom/extend-expect";

// Test away
let wrapper;
afterEach(cleanup);
beforeEach(() => {
  wrapper = redux.renderWithRedux(<Dashboard />);
});

test("Dashboard shows controls", () => {
  render(<Controls />);
});

test("Dashboard shows display", () => {
  render(<Display />);
});

// gate defaults to unlocked and open
test("gate defaults to unlocked and open", () => {
  expect(wrapper.getByText(/open/i));
  expect(wrapper.getByText(/unlocked/i));
});

// gate cannot be closed or opened if it is locked
test("gate cannot be closed or opened if it is locked", () => {
  const lockButton = wrapper.getByText(/close gate/i);
  const closeButton = wrapper.getByText(/lock gate/i);
  fireEvent.click(closeButton);
  fireEvent.click(lockButton);
  expect(lockButton).toBeEnabled();
  expect(closeButton).toBeDisabled();
});
