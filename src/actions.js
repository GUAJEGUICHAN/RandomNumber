export function updateStartNumber(value) {
  return {
    type: 'updateStartNumber',
    payload: {
      inputStartNumber: value,
    },
  };
}
export function updateEndNumber(value) {
  return {
    type: 'updateEndNumber',
    payload: {
      inputEndNumber: value,
    },
  };
}
export function setTheNumbers() {
  return {
    type: 'setTheNumbers',
  };
}
