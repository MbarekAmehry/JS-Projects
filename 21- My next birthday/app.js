const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const nextBirthday = document.querySelector(".btn");
const timeLeft = document.querySelector(".timeLeft");
const cards = document.querySelectorAll(".card h1");

const futureDate = new Date(2020, 10, 08, 18, 00, 00);

const futureYear = futureDate.getFullYear();
const futureMonth = months[futureDate.getMonth()];
const weekDay = weekdays[futureDate.getDay()];
const FutureDay = futureDate.getDate();

nextBirthday.textContent = `${weekDay} ${FutureDay} ${futureMonth} ${futureYear} at 23:00  `;

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;

  // times in mili seconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const day = Math.floor(t / oneDay);
  const hour = Math.floor((t % oneDay) / oneHour);
  const minute = Math.floor((t % oneHour) / oneMinute);
  const second = Math.floor((t % oneMinute) / 1000);

  let timeValues = [day, hour, minute, second];
  cards.forEach((card, index) => {
    card.innerHTML = timeValues[index];
  });

  if (t < 0) {
    clearInterval(countDown);
    timeLeft.innerHTML = `<img src="its-my-birthday.jpg" alt="" srcset="" />
    `;
  }
};

let countDown = setInterval(getRemainingTime, 1000);

getRemainingTime();
