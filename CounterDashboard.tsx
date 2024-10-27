import React, { useState } from 'react';

export default function CounterDashboard() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1>Counter Dashboard</h1>
      <p data-testid="count">Count: {count}</p>
      <button data-testid="increment-button" onClick={increment}>
        Increment
      </button>
      <button data-testid="decrement-button" onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
      <button data-testid="reset-button" onClick={reset} disabled={count === 0}>
        Reset
      </button>
    </div>
  );
}
