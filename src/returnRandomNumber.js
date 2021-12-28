export default function returnRandomNumber(start, end, selectedNumbers) {
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
