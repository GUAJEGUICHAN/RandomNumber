import { setTheNumbers, updateEndNumber, updateStartNumber } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  it('updateStartNumber', () => {
    const state = {
      inputStartNumber: undefined,
      inputEndNumber: undefined,
      startNumber: 0,
      endNumber: 0,
    };
    expect(reducer(state, updateStartNumber(1))).toStrictEqual({
      inputStartNumber: 1,
      inputEndNumber: undefined,
      startNumber: 0,
      endNumber: 0,
    });
  });

  it('updateEndNumber', () => {
    const state = {
      inputStartNumber: undefined,
      inputEndNumber: undefined,
      startNumber: 0,
      endNumber: 0,
    };

    expect(reducer(state, updateEndNumber(100))).toStrictEqual({
      inputStartNumber: undefined,
      inputEndNumber: 100,
      startNumber: 0,
      endNumber: 0,
    });
  });

  it('setTheNumbers', () => {
    const state = {
      inputStartNumber: 1,
      inputEndNumber: 100,
      startNumber: 0,
      endNumber: 0,
    };
    expect(reducer(state, setTheNumbers())).toStrictEqual({
      inputStartNumber: '',
      inputEndNumber: '',
      startNumber: 1,
      endNumber: 100,
    });
  });
});
