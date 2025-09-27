// Countdown to Sep 30th, 2025
const countdownDate = new Date("Sep 30, 2025 00:00:00").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl) daysEl.innerHTML = days;
  if (hoursEl) hoursEl.innerHTML = hours;
  if (minutesEl) minutesEl.innerHTML = minutes;
  if (secondsEl) secondsEl.innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdown);
    const countdownEl = document.getElementById("countdown");
    if (countdownEl) countdownEl.innerHTML = "Conference Started!";
  }
}, 1000);
