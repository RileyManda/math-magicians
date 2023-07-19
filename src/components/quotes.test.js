import React from 'react';
import { render } from '@testing-library/react';
import Quotes from './Quotes';

describe('Quotes', () => {
  it('should render loading state', () => {
    const { container } = render(<Quotes />);
    expect(container).toMatchSnapshot();
  });
  it('should render error state', () => {
    const { asFragment } = render(<Quotes />);
    const error = new Error('Failed to fetch data');
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(error);
    expect(asFragment()).toMatchSnapshot();
  });
});
