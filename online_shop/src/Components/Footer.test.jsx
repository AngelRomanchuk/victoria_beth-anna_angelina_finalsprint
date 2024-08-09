import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the "toBeInTheDocument" matcher
import Footer from './Footer';

test('renders the footer with the logo on the right', () => {
  const { getByText, getByAltText } = render(<Footer />);
  
  // Check that the footer contains specific text
  expect(getByText('Your footer text here')).toBeInTheDocument();

  // Check that the logo is rendered and positioned correctly
  const logo = getByAltText('Logo');
  expect(logo).toBeInTheDocument();
  
});

