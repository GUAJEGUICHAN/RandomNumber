import React from 'react';

export default function RandomNumber() {
  return (
    <div>
      <div id="menu">
        <button type="button" id="showTheNumber">숫자 뽑기</button>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
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
