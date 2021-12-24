import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

test('render App', () => {
  const { getByText, getByDisplayValue, getByPlaceholderText } = render(<App />);
  expect(getByText('이룸청년 어른이들을 위한 크리스마스 선물')).not.toBeNull();
  expect(getByPlaceholderText('시작 숫자 입력')).not.toBeNull();
  expect(getByPlaceholderText('끝 숫자 입력')).not.toBeNull();
  expect(getByText('숫자 뽑기')).not.toBeNull();
});

describe('Main', () => {
  it('input works', () => {
    // useSelector.mockImplementation(selector)

  });
});
