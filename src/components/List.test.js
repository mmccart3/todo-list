import { render, screen } from '@testing-library/react';
import List from './List';

const testData = [
    {checked: false, value: "item 1"},
    {checked: false, value: "item 2"},
    {checked: false, value: "item 3"}
]


test('renders the heading', () => {
  render(<List Items ={testData}/>);
  const elementToBeChecked = screen.getByText(/item 3/i);
  expect(elementToBeChecked).toBeInTheDocument();
});
