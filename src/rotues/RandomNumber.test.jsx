import React from 'react';
import { render } from '@testing-library/react';

const { default: RandomNumber } = require('./RandomNumber');

test('RandomNumber', () => {
  const { getByText } = render(<RandomNumber />);
  expect(getByText('숫자 뽑기'));
  expect(getByText('리셋'));
  expect(getByText('1'));
  expect(getByText('100'));
});
