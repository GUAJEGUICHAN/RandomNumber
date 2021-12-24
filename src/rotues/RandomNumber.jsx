import React from 'react';
import { useSelector } from 'react-redux'
import randomNumberAcc from "../randomNumberAcc"

export default function RandomNumber() {

  const { startNumber, endNumber } = useSelector((state) => ({
    startNumber: state.startNumber,
    endNumber: state.endNumber,
  }))

  function showTheNumber() {
    randomNumberAcc(startNumber, endNumber)
  }
  return (
    <div>
      <div id="menu">
        <button type="button" id="showTheNumber" onClick={showTheNumber}>숫자 뽑기</button>
        <div>시작 숫자 {startNumber}</div>
        <div>시작 숫자 {endNumber}</div>
        <button type="button" id="reset">리셋</button>
      </div>
      <div id="theNumberContainer">
        <div id="theNumber">
          0
        </div>
      </div>
      <div id="selectedNumbers">
        <span>1</span>
      </div>
    </div>
  );
}
