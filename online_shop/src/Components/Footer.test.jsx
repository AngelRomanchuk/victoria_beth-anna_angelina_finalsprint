import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders the component', () => {
  render(<Footer text="Hello, World!" />);
  
  const element = screen.getByText(/Beauty Bliss/i);
  expect(element).toBeInTheDocument();
});
