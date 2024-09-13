import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReducerComponent from './ReducerComponent';

describe('<ReducerComponent />', () => {
  test('it should mount', () => {
    render(<ReducerComponent />);

    const ReducerComponent = screen.getByTestId('ReducerComponent');

    expect(ReducerComponent).toBeInTheDocument();
  });
});