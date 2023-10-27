/**
 * !getting htmls
 */
let startBtn = document.querySelector(".js-startBtn");
let stopBtn = document.querySelector(".js-stopBtn");
let resetBtn = document.querySelector(".js-resetBtn");

/**
 * !variables
 */

let [hours, minutes, seconds] = [0, 0, 0];

let timer = null;

/**
 * !functions
 */

function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? `0${hours}` : hours;
  let m = minutes < 10 ? `0${minutes}` : minutes;
  let s = seconds < 10 ? `0${seconds}` : seconds;

  document.querySelector(".js-stopWatch").innerHTML = `${h}:${m}:${s}`;
}

/**
 * !intervals
 */

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  document.querySelector(".js-stopWatch").innerHTML = `00:00:00`;
}

/**
 * !eventListeners
 */

startBtn.addEventListener("click", () => {
  watchStart();
});

stopBtn.addEventListener("click", () => {
  watchStop();
});

resetBtn.addEventListener("click", () => {
  watchReset();
});
