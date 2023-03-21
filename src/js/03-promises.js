import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const btnSubmit = document.querySelector('button[type="submit"]');
const amountRef = document.querySelector('input[name="amount"]');
const delayRef = document.querySelector('input[name="delay"]');
const stepRef = document.querySelector('input[name="step"]');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const amount = Number(amountRef.value);
  let delay = Number(delayRef.value);
  const step = Number(stepRef.value);

  for (let position = 1; position <= amount; position +=1) {
    createPromise({position, delay})
    .then(({position, delay}) => {
      console.log(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay}) => {
      console.log(`Rejected promice ${position} in ${delay}ms`);
    });
    delay += step;
  };
};

function createPromise({position, delay}) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
};



// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();

//   const {
//     elements: {delay, step, amount},
//   } = e.currentTarget;

//   let currentDelay = Number(delay.value);

//   for (let i = 1; i <= Number(amount.value); i+=1) {
//     createPromise(i, currentDelay)
//     .then(({position, delay}) => {
//       Notiflix.Notify.success(`Fulfilledvpromise ${position} in ${delay}ms`);
//     })
//     .cath(({position, delay}) => {
//       Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
//     });

//     currentDelay += Number(step.value);
//   };
// };

