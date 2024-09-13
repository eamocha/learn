import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import atinga from './atinga';

describe('<atinga />', () => {
  test('it should mount', () => {
    render(<atinga />);

    const atinga = screen.getByTestId('atinga');

    expect(atinga).toBeInTheDocument();
  });
});