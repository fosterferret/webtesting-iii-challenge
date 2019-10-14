// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

// displays if gate open/closed and if it is locked/unlocked
test('displays if gate is open/closed and if it is locked/unlocked', () => {
  const display = render(<Display />);
  expect(display.getByText(/open/i));
  expect(display.getByText(/unlocked/i));
});

// displays 'Closed' if the closed prop is true and 'Open' if otherwise
test('displays "Closed" if closed prop is true and "Open" if otherwise', () => {
  const displayWhenClosed = render(<Display closed={true} />);
  expect(displayWhenClosed.getByText(/closed/i));
  
  const displayWhenNotClosed = render(<Display closed={false} />);
  expect(displayWhenNotClosed.getByText(/open/i));

});

// displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
test('displays "Locked" if the locked prop is true and "Unlocked" if otherwise', () => {
  const displayWhenLocked = render(<Display locked={true} />);
  expect(displayWhenLocked.getByText(/locked/i));

  const displayWhenNotLocked = render(<Display locked={false} />);
  expect(displayWhenNotLocked.getByText(/unlocked/i));
});


// when locked or closed use the red-led class
test('uses red-led class when locked', () => {
  const component = render(<Display locked={true} />);
  const lockedNode = component.getByText(/locked/i);
  expect(lockedNode.classList.contains('red-led')).toBe(true);
});

test('uses red-led class when closed', () => {
  const component = render(<Display closed={true} />);
  const closedNode = component.getByText(/closed/i);
  expect(closedNode.classList.contains('red-led')).toBe(true);
});

// when unlocked or open use the green-led class
test('uses green-led class when unlocked', () => {
  const component = render(<Display locked={false} />);
  const unlockedNode = component.getByText(/unlocked/i);
  expect(unlockedNode.classList.contains('green-led')).toBe(true);
});

test('uses green-led class when open', () => {
  const component = render(<Display closed={false} />);
  const openNode = component.getByText(/open/i);
  expect(openNode.classList.contains('green-led')).toBe(true);
});