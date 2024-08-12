
import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';

describe('Banner Component', () => {
  test('renders with title and subtitle', () => {
    render(<Banner title="Welcome" subtitle="This is the subtitle" />);

    expect(screen.getByText('Welcome')).toBeInTheDocument();

    expect(screen.getByText('This is the subtitle')).toBeInTheDocument();
  });

  test('renders without crashing', () => {
    render(<Banner title="Hello" subtitle="Testing React components" />);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});