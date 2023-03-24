const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

stopBtn.disabled = true;

startBtn.addEventListener("click", changeColor);

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    stopBtn.disabled = false;
    startBtn.disabled = true;
  }, 1000);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};