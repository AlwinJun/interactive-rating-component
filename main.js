const submit = document.getElementById('submit')
const goBack = document.getElementById('go-back')
const submitCard = document.querySelector('.submit-card')
const thankYouCard = document.querySelector('.thankyou-card')
const rateBtn = document.querySelectorAll('.btns')

// When click: hide submit card, show thankyou card
submit.addEventListener('click', function(){

  submitCard.style.display = 'none'
  thankYouCard.classList.remove("hide")

})

// When click: hide thankyou card show submit card 
goBack.addEventListener('click', function(){

  thankYouCard.classList.add('hide')
  submitCard.style.display = 'block'

})
