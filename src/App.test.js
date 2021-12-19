import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the heading', () => {
  render(<App />);
  const elementToBeChecked = screen.getByText(/to do list/i);
  expect(elementToBeChecked).toBeInTheDocument();
});

test('renders add', () => {
  render(<App />);
  const elementToBeChecked = screen.getByRole("heading");
  expect(elementToBeChecked).toBeInTheDocument();
});