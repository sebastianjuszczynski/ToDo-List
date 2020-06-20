const date = () => {
  const dateNow = new Date();
  let day = dateNow.getDay();
  if (day === 0) {
    day = "Sunday";
  } else if (day === 1) {
    day = "Monday";
  } else if (day === 2) {
    day = "Tuesday";
  } else if (day === 3) {
    day = "Wednesday";
  } else if (day === 4) {
    day = "Thursday";
  } else if (day === 5) {
    day = "Friday";
  } else {
    day = "Saturday";
  }
  const currentDay =
    dateNow.getDate() < 10 ? "0" + dateNow.getDate() : dateNow.getDate();
  let month = dateNow.getMonth();
  if (month === 0) {
    month = "Jan";
  } else if (month === 1) {
    month = "Feb";
  } else if (month === 2) {
    month = "Mar";
  } else if (month === 3) {
    month = "Apr";
  } else if (month === 4) {
    month = "May";
  } else if (month === 5) {
    month = "Jun";
  } else if (month === 6) {
    month = "Jul";
  } else if (month === 7) {
    month = "Aug";
  } else if (month === 8) {
    month = "Sep";
  } else if (month === 9) {
    month = "Oct";
  } else if (month === 10) {
    month = "Nov";
  } else {
    month = "Dec";
  }
  const hours =
    dateNow.getHours() < 10 ? "0" + dateNow.getHours() : dateNow.getHours();
  const minutes =
    dateNow.getMinutes() < 10
      ? "0" + dateNow.getMinutes()
      : dateNow.getMinutes();
  const secunds =
    dateNow.getSeconds() < 10
      ? "0" + dateNow.getSeconds()
      : dateNow.getSeconds();
  const year = dateNow.getUTCFullYear();
  document.querySelector(
    ".date__daySpan"
  ).textContent = `${day}, ${currentDay} ${month} ${year}`;
  document.querySelector(
    ".date__hourSpan"
  ).textContent = `${hours}:${minutes}:${secunds}`;
};

setInterval(date, 1000);
