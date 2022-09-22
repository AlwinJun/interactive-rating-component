const submit = document.getElementById('submit')
const goBack = document.getElementById('go-back')
const submitCard = document.querySelector('.submit-card')
const thankYouCard = document.querySelector('.thankyou-card')
const rateBtns = document.querySelectorAll('.btns')
const rate = document.querySelector('.thankyou-rate span')


// Give click event to all rateBtns
// Get and store the button value in rate
rateBtns.forEach((rateBtn) => {
  rateBtn.addEventListener('click', () => {

    rate.textContent = rateBtn.textContent
    
  })
})

//If the user didn't pick the rate will defaulted to 5
rate.textContent = 5

// When click: hide submit card, show thankyou card
submit.addEventListener('click', function() {

  submitCard.style.display = 'none'
  thankYouCard.classList.remove("hide")
  

})

//When click: hide thankyou card show submit card 
goBack.addEventListener('click', function() {

  thankYouCard.classList.add('hide')
  submitCard.style.display = 'block'

})

