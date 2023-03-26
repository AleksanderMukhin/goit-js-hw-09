// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const btnStart = document.querySelector('[data-start]');
const daysVal = document.querySelector('[data-days]');
const hoursVal = document.querySelector('[data-hours]');
const minutesVal = document.querySelector('[data-minutes]');
const secondsVal = document.querySelector('[data-seconds]');
const input = document.querySelector('#datetime-picker');


btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {    
    const downData = selectedDates[0].getTime();
    const nowData = new Date().getTime();
    const ms = downData - nowData;

    if (downData <= nowData) {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStart.disabled = true;
      return;
    };

    if (downData) {
      btnStart.disabled = false;
    };

    const { days, hours, minutes, seconds } = convertMs(ms);
    daysVal.textContent = addLeadingZero(days);
    hoursVal.textContent = addLeadingZero(hours);
    minutesVal.textContent = addLeadingZero(minutes);
    secondsVal.textContent = addLeadingZero(seconds);
  },  
};

btnStart.addEventListener('click', startTimer);
flatpickr("#datetime-picker", options);

function startTimer() {
  let intervalId;
  btnStart.disabled = true;
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(() => {
    const minTime = input._flatpickr.selectedDates[0].getTime() - Date.now();
    if (minTime <= 0) {
      clearInterval(intervalId);
      
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(minTime);
    daysVal.textContent = addLeadingZero(days);
    hoursVal.textContent = addLeadingZero(hours);
    minutesVal.textContent = addLeadingZero(minutes);
    secondsVal.textContent = addLeadingZero(seconds);
  }, 1000);
};
console.log("🚀  input", input._flatpickr)
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};