import React from 'react';
import { render, act } from '@testing-library/react';
import Quotes from './Quotes';

describe('Quotes', () => {
  // mock if dom container has been rendered
  it('should match the snapshot', () => {
    const { container } = render(<Quotes />);
    expect(container).toMatchSnapshot();
  });

  // mock if dom container has produced an error to the dom
  it('should render error state', async () => {
    const error = new Error('Failed to fetch data');
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(error);

    await act(async () => {
      const { asFragment } = render(<Quotes />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
