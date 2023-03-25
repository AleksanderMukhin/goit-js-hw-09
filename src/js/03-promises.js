import Notiflix from 'notiflix';

const createPromisesButton = document.querySelector('button[type="submit"],[textContent="Create promises"]');
const form = document.querySelector('.form');
const amountInput = form.querySelector('[name="amount"]');
const delayInput = form.querySelector('[name="delay"]');

const stepInput = form.querySelector('[name="step"]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const amount = parseInt(amountInput.value);
  const delay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay + i * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)})
};