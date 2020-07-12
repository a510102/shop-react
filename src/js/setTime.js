export const changeToDate = (number, isTrue = false) => {
  let dateTime = new Date();
  dateTime.setTime(number * 1000);
  const year = dateTime.getFullYear();
  const month = addZero(dateTime.getMonth() + 1);
  const day = addZero(dateTime.getDate());
  const hour = addZero(dateTime.getHours());
  const min = addZero(dateTime.getMinutes());

  let date;
  if (isTrue) {
    date = `${year}-${month}-${day}- ${hour}: ${min}`;
  } else {
    date = `${year}-${month}-${day}`;
  }
  return date;
}

function addZero(number) {
  if (number < 10) {
    number = `0${number}`
  }
  return number;
}