const initialState = {
  inputStartNumber: '',
  inputEndNumber: '',
  startNumber: 0,
  endNumber: 0,
  selectedNumbers: [],
};
export default function reducer(state = initialState, action) {
  if (action.type === 'setTheNumbers') {
    return {
      ...state,
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

  if (action.type === 'addSelectedNumbers') {
    state.selectedNumbers.push(action.payload.theNumber);
    console.log('현재 selectedNumbers 현황', state.selectedNumbers);
    return {
      ...state,
    };
  }
  return state;
}
