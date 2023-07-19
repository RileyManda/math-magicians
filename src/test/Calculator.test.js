import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

jest.mock('../logic/calculate');

describe('Calculator', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });

  it('should render the heading correctly', () => {
    render(<Calculator />);
    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toHaveTextContent('Lets do some math!');
  });

  it('should update state on input change', () => {
    render(<Calculator />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: '0' } });

    expect(parseFloat(input.value)).toBe(0);
  });

  it('should update state on button click', () => {
    render(<Calculator />);
    const input = screen.getByRole('textbox');
    const button = screen.getByText('0');

    fireEvent.click(button);

    expect(input.value).toBe('0');
  });
});
