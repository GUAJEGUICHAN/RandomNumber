import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setTheNumbers, updateEndNumber, updateStartNumber } from '../actions';
export default function Main() {
  const dispatch = useDispatch();

  const {
    inputStartNumber,
    inputEndNumber,
  } = useSelector((state) => {

    return {
      inputStartNumber: state.inputStartNumber,
      inputEndNumber: state.inputEndNumber,
    }
  });
  const navigate = useNavigate()

  function handleStartNumberChange(event) {
    dispatch(updateStartNumber(event.target.value));
  }
  function handleEndNumberChange(event) {
    dispatch(updateEndNumber(event.target.value));
  }

  function handleClickToSaveNumbers() {
    if ((0 < inputEndNumber) && (0 < inputStartNumber) && inputStartNumber < inputEndNumber) {
      dispatch(setTheNumbers());
      navigate('/R')
    }
  }
  return (
    <div>
      <div>
        <div>이룸청년 어른이들을 위한 크리스마스 선물</div>
      </div>
      <div>
        <input type="number" placeholder="시작 숫자 입력" onChange={handleStartNumberChange} value={inputStartNumber} />
        <input type="number" placeholder="끝 숫자 입력" onChange={handleEndNumberChange} value={inputEndNumber} />
        <button type="button" id="startTheGame" onClick={handleClickToSaveNumbers}>숫자 뽑기</button>
      </div>
    </div>
  );
}
