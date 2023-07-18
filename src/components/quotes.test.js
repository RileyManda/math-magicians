import React from 'react';
import { render, act } from '@testing-library/react';
import Quotes from './Quotes';

describe('Quotes', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Quotes />);
    expect(container).toMatchSnapshot();
  });

  it('should render loading state', () => {
    const { container } = render(<Quotes />);
    expect(container).toMatchSnapshot();
  });

  it('should render error state', async () => {
    const error = new Error('Failed to fetch data');
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(error);

    await act(async () => {
      const { asFragment } = render(<Quotes />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
