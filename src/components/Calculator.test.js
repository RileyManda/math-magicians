import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './Calculator';

jest.mock('../logic/calculate');

describe('Calculator', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });

  it('should update state on input change', () => {
    render(<Calculator />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: '0' } });

    expect(parseFloat(input.value)).toBe(0);
  });
});
