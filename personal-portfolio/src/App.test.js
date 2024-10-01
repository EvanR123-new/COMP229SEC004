// App.test.js
// Student Name: Evan Ratnani
// Student ID: 301428392
// Date: September 28, 2024
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
