import React from 'react';
import { render, act } from '@testing-library/react';
import Quotes from './Quotes';

describe('Quotes', () => {
  // mock if dom container has been rendered
  it('should match the snapshot', () => {
    const { container } = render(<Quotes />);
    expect(container).toMatchSnapshot();
  });

  // Testing the  rendering of an error state in the Quotes component.
  // It mocks a failed API request using fetch and verifies that the component's
  //  rendered output matches the expected snapshot.
  it('should render error state', async () => {
    const error = new Error('Failed to fetch data');
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(error);

    await act(async () => {
      const { asFragment } = render(<Quotes />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
