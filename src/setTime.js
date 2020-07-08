export const changeToDate = (number, isTrue = false) => {
  let dateTime = new Date();
  dateTime.setTime(number * 1000);
  const year = dateTime.getFullYear();
  let month = dateTime.getMonth() + 1;
  let day = dateTime.getDate();
  const hour = dateTime.getHours();
  const min = dateTime.getMinutes();

  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  let date;
  if (isTrue) {
    date = `${year}-${month}-${day}- ${hour}: ${min}`;
  } else {
    date = `${year}-${month}-${day}`;
  }
  return date;
}