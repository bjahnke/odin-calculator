let first, second, op

const display = document.querySelector('.display')

// allow for 8, 8 *, 8 * 8, but not * 8
const displayPattern = /^(?:\d+)(?:[+\-*\/]\d*)?$/

/*
* Translates calculator input to the display
*/
function updateDisplay () {
  const newString = display.textContent + this.textContent
  if (displayPattern.test(newString)) {
    display.textContent = newString
  }
}

function clearInputs () {
  display.textContent = ''
  first = ''
  second = ''
  op = ''
}

const calcButtons = document.querySelectorAll('button.op,button.num')
console.group(calcButtons)
calcButtons.forEach(button => button.addEventListener('click', updateDisplay))
