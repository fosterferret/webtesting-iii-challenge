import React from "react";
import { render } from "@testing-library/react";
import Controls from "../controls/Controls";
import Display from "../display/Display";

// Test away
test("Dashboard shows controls", () => {
  render(<Controls />);
});

test("Dashboard shows display", () => {
  render(<Display />);
});
