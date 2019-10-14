import React from "react";
import { render } from "@testing-library/react";
import Controls from "../controls/Controls";
import Display from "../display/Display";
import Dashboard from './Dashboard';

// Test away
test("Dashboard shows controls", () => {
  render(<Controls />);
});

test("Dashboard shows display", () => {
  render(<Display />);
});


// gate defaults to unlocked and open
test('gate defaults to unlocked and open', () => {
    const dashboard = render(<Dashboard />);
    expect(dashboard.getByText(/open/i));
    expect(dashboard.getByText(/unlocked/i));
  });
  
  // gate cannot be closed or opened if it is locked
  test('gate cannot be closed or opened if it is locked', () => {
    const component = render(<Controls locked={true} closed={true} />);
    expect(component.queryByText(/close gate/i)).toBe(null);
    const openButton = component.getByText(/open gate/i);
    expect(openButton.disabled).toBe(true);
  });