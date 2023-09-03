import './style.css';

const submit = document.getElementById('submit') as HTMLButtonElement;
const goBack = document.getElementById('go-back') as HTMLButtonElement;
const submitCard = document.querySelector('.submit-card') as HTMLDivElement;
const thankYouCard = document.querySelector('.thankyou-card') as HTMLDivElement;
const rateBtns = document.querySelectorAll('.btns') as NodeListOf<HTMLButtonElement>;
const rate = document.querySelector('.thankyou-rate span') as HTMLSpanElement;

rateBtns.forEach((rateBtn) => {
  rateBtn.addEventListener('click', () => {
    rate.textContent = rateBtn.textContent;
  });
});

// When click: hide submit card, show thankyou card
submit.addEventListener('click', function () {
  //If the user didn't pick the rate will defaulted to 5
  if (rate.textContent == '') {
    rate.textContent = '5';
  }
  submitCard.style.display = 'none';
  thankYouCard.classList.remove('hide');
});

//When click: hide thankyou card show submit card
goBack.addEventListener('click', function () {
  thankYouCard.classList.add('hide');
  submitCard.style.display = 'block';
  rate.textContent = '';
});

