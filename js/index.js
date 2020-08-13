const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const date = document.getElementById("date");
const loading = document.getElementById("loading");

const newYearTime = new Date(`September 12 2001 00:00:00`);

//background year
document.querySelector('.date').innerText = new Date().toLocaleDateString();

//update time
function updateCountdown() {
  const currentTime = new Date();
  const diff = currentTime - newYearTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // add values to dom
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

// show spinner before countdown                                // ?????
// setTimeout(() => {
//   loading.remove();
//   countdown.style.display = "flex";
// }, 1000);

// run every second
setInterval(updateCountdown, 1000);