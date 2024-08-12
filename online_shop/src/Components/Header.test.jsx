import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test('renders the navigation links', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();
});

