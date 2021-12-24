
const initialState = {
  inputStartNumber: '',
  inputEndNumber: '',
  startNumber: 0,
  endNumber: 0,
};
export default function reducer(state = initialState, action) {

  if (action.type === 'setTheNumbers') {
    return {
      inputStartNumber: '',
      inputEndNumber: '',
      startNumber: Number(state.inputStartNumber),
      endNumber: Number(state.inputEndNumber),
    };
  }
  if (action.type === 'updateStartNumber') {
    return {
      ...state,
      inputStartNumber: action.payload.inputStartNumber,
    };
  }
  if (action.type === 'updateEndNumber') {
    return {
      ...state,
      inputEndNumber: action.payload.inputEndNumber,
    };
  }

  return state;
}