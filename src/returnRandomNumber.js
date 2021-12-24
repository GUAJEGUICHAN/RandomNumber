export default function returnRandomNumber(start, end, selectedNumbers) {
  // console.log("현재 배열 길이 : ", selectedNumbers.length)
  // console.log("받을 수 있는 배열 길이 : ", (end - start))
  if (selectedNumbers.length === (end - start)) {
    return -1;
  }
  let theNumber;
  do {
    theNumber = Math.floor(Math.random() * end + start);
    if (selectedNumbers.includes(theNumber)) {
      console.log(`숫자${theNumber}는 중복이니까 패스!`);
    } else {
      console.log(`숫자${theNumber}는 중복이 아니군 리턴!`);
      return theNumber;
    }
  } while (true);
}
