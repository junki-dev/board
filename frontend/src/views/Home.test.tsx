import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const testElement = screen.getByText(/Home/i);
  expect(testElement).toBeInTheDocument();
});
