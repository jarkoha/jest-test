import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CounterDashboard from './CounterDashboard';

describe('CounterDashboard Component', () => {
  test('renders CounterDashboard component', () => {
    render(<CounterDashboard />);
    expect(screen.getByText('Counter Dashboard')).toBeInTheDocument();
  });

  test('increments the counter', () => {
    render(<CounterDashboard />);
    const incrementButton = screen.getByTestId('increment-button');
    const countDisplay = screen.getByTestId('count');

    fireEvent.click(incrementButton);
    expect(countDisplay).toHaveTextContent('Count: 1');
    
    fireEvent.click(incrementButton);
    expect(countDisplay).toHaveTextContent('Count: 2');
  });

  test('decrements the counter and disables at zero', () => {
    render(<CounterDashboard />);
    const decrementButton = screen.getByTestId('decrement-button');
    const incrementButton = screen.getByTestId('increment-button');
    const countDisplay = screen.getByTestId('count');

    // Ensure decrement button is disabled at zero
    expect(decrementButton).toBeDisabled();

    // Increment, then decrement
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    expect(countDisplay).toHaveTextContent('Count: 1');

    // Ensure decrement button is enabled
    expect(decrementButton).not.toBeDisabled();
  });

  test('resets the counter and reset button is disabled at zero', () => {
    render(<CounterDashboard />);
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');
    const countDisplay = screen.getByTestId('count');

    // Ensure reset button is disabled at zero
    expect(resetButton).toBeDisabled();

    // Increment, then reset
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(resetButton).not.toBeDisabled(); // Reset button enabled after increment
    fireEvent.click(resetButton);

    // Reset button should now be disabled again
    expect(resetButton).toBeDisabled();
    expect(countDisplay).toHaveTextContent('Count: 0');
  });
});
