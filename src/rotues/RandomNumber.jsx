import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import returnRandomNumber from '../returnRandomNumber';

const TheNumber = styled.div`
  display:flex;

justify-content: center;
align-itemst:center;
  font-size:20rem;
`;

// interval = setInterval(function () {
//   if (!isStop) {
//     console.log("await..")
//   } else {
//     console.log("stopped")
//     clearInterval(interval)
//     // 밖에서 선언한 interval을 안에서 중지시킬 수 있음
//   }
// }, 500)

export default function RandomNumber() {
  const [theNumber, setTheNumber] = useState(0);
  const { startNumber, endNumber, selectedNumbers } = useSelector((state) => ({
    startNumber: state.startNumber,
    endNumber: state.endNumber,
    selectedNumbers: state.selectedNumbers,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('selectedNumbers 업뎃됐넹', selectedNumbers);
  }, [[...selectedNumbers]]);

  function showTheNumber() {
    if (theNumber === -1) return;
    const showNumbers = setInterval(() => {
      setTheNumber(returnRandomNumber(startNumber, endNumber, selectedNumbers));
      // console.log(setTheNumber(returnRandomNumber(startNumber, endNumber, selectedNumbers)))
      // setTheNumber(2);
    }, 50);

    // selectedNumbers.push()
    // setTimeout(clearInterval(showNumbers), 4000);
    setTimeout(() => {
      clearInterval(showNumbers);
      console.log('디스패치한다.', selectedNumbers, theNumber);
      dispatch({
        type: 'addSelectedNumbers',
        payload: {
          theNumber,
        },
      });
    }, 1000);

    // 나도 안멋있는 코드라는 것을 안다.

    //
  }
  return (
    <div>
      <div id="menu">
        <button type="button" id="showTheNumber" onClick={showTheNumber}>숫자 뽑기</button>
        {/* <div>
          시작 숫자
          {startNumber}
        </div>
        <div>
          시작 숫자
          {endNumber}
        </div>
        <button type="button" id="reset">리셋</button> */}
      </div>
      <div id="theNumberContainer">
        <TheNumber id="theNumber">
          <span>{theNumber === -1 ? '숫자를 모두 뽑았습니다!' : theNumber}</span>
        </TheNumber>
      </div>
      {/* <div id="selectedNumbers">
        <span>1</span>
      </div> */}
    </div>
  );
}
