import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

it('renders with child', () => {
  const { getByText } = render(
      <Card>
          <h1>Hello</h1>
      </Card>
  );

  expect(getByText(/Hello/i)).toBeInTheDocument();
});
