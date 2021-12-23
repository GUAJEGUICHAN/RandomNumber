import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App', () => {
  const { getByText } = render();
  expect(getByText('App')).not.toBeNull();
});
