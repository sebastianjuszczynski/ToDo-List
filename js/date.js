const date = () => {
  const dateNow = new Date();
  const daysNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const currentDay =
    dateNow.getDate() < 10 ? "0" + dateNow.getDate() : dateNow.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
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
  document.querySelector(".date__daySpan").textContent = `${
    daysNames[dateNow.getMonth()]
  }, ${currentDay} ${monthNames[dateNow.getMonth()]} ${year}`;
  document.querySelector(
    ".date__hourSpan"
  ).textContent = `${hours}:${minutes}:${secunds}`;
};

setInterval(date, 1000);
