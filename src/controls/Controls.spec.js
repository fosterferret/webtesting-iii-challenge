import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

// Test away!

//- provide buttons to toggle the `closed` and `locked` states.
test('The component provides buttons to toggle closed and locked states', () => {
    const { getAllByRole } = render(<Controls />);
    getAllByRole('button');
  });

//- buttons' text changes to reflect the state the door will be in if clicked
test('Button text changes to reflect reflect the state the door will be in if clicked', () => {
    const controls = render(<Controls locked={true} />);
    const unlockGate = controls.getByText(/unlock gate/i);
    fireEvent.click(unlockGate);
    controls.findByText(/unlocked/i);
  });

// - the closed toggle button is disabled if the gate is locked
  test('The closed button of the component is disabled if the gate is locked', () => {
    const component = render(<Controls locked={true} closed={true} />);
    const button = component.getByText(/open gate/i);
    expect(button.disabled).toBe(true);
  });

// - the locked toggle button is disabled if the gate is open
test('The locked button of the component is disabled if the gate is open', () => {
    const component = render(<Controls locked={false} closed={false} />);
    const button = component.getByText(/lock gate/i);
    expect(button.disabled).toBe(true);
  });