
var elFormWeekdays = document.querySelector(`.weekdays`);
var elNumberInput = elFormWeekdays.querySelector(`.number-input`);
var result = elFormWeekdays.querySelector(`.result-box`);


elFormWeekdays.addEventListener(`submit`, function (evt) {
  evt.preventDefault();
  var number = Number(elNumberInput.value);
  if (number === 1) {
    result.textContent = `Dushanba`;
  }
  if (number === 2) {
    result.textContent = `Seshanba`;
  }
  if (number === 3) {
    result.textContent = `Chorshanba`;
  }
  if (number === 4) {
    result.textContent = `Payshanba`;
  }
  if (number === 5) {
    result.textContent = `Juma`;
  }
  if (number === 6) {
    result.textContent = `Shanba`;
  }
  if (number === 7) {
    result.textContent = `Yakshanba`
  }
   if (number < 1 || number > 7) {
    result.textContent = `0 dan katta va 8 dan kichik raqamlarni kiriting!`;
  }

});