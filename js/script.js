const display = document.querySelector('.display')

// allow for 8, 8 *, 8 * 8, but not * 8
const numPattern = /\d*\.?\d*/
const opPattern = /\s[+\-*/]\s/
const justOpPattern = /([+\-*/])/

const displayPattern = new RegExp(`^(?:${numPattern.source})(?:${opPattern.source}${numPattern.source})?$`)

function round (num, decimals) {
  const scale = decimals * 10
  return Math.round((num + Number.EPSILON) * scale) / scale
}

function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function multiply (a, b) {
  return a * b
}

function divide (a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero')
  }
  return a / b
}

/**
 * Performs a mathematical operation on two numbers.
 *
 * @param {number} first - The first number.
 * @param {number} second - The second number.
 * @param {string} op - The operator to be applied.
 * @returns {number} - The result of the operation.
 */
function operator (first, second, op) {
  switch (op) {
    case '+':
      return add(first, second)
    case '-':
      return subtract(first, second)
    case '*':
      return multiply(first, second)
    case '/':
      return divide(first, second)
  }
}

/*
* updates display if no rules are broken
*/
function updateDisplay () {
  const newString = display.value + this.textContent
  if (displayPattern.test(newString)) {
    display.value = newString
  } else if (justOpPattern.test(this.textContent)) {
    if (evalEquation() === true) {
      display.value += this.textContent
    }
  }
}

function clearInputs () {
  display.value = ''
}

function formatInput (inputStr) {
  if (!opPattern.test(inputStr) && justOpPattern.test(inputStr)) {
    inputStr = inputStr.replace(justOpPattern, ' $1 ')
  }
  return inputStr
}

/*
* parses the input and calculates result if input is valid
*/
function evalEquation () {
  const inputStr = formatInput(display.value)
  display.value = inputStr
  const tokens = inputStr.trim().split(' ')
  let evaled = false
  if (tokens.length === 3) {
    const first = parseFloat(tokens[0])
    const op = tokens[1]
    const second = parseFloat(tokens[2])
    if (op === '/' && second === 0) {
      alert('Divide by 0 not allowed!')
      return evaled
    }
    evaled = true
    display.value = round(operator(first, second, op), 4)
  }
  return evaled
}

function deleteToken () {
  if (display.value.length > 0) {
    let sliceIdx = -1
    if (
      display.value.length >= 3 &&
      /\s.{1}\s/.test(display.value.slice(-3))
    ) {
      sliceIdx = -3
    }
    display.value = display.value.slice(0, sliceIdx)
  }
}
const calcButtons = document.querySelectorAll('button.op,button.num,button#dot')
calcButtons.forEach(button => button.addEventListener('click', updateDisplay))

document.querySelector('#clear').addEventListener('click', clearInputs)
document.querySelector('#equals').addEventListener('click', evalEquation)
document.querySelector('#delete').addEventListener('click', deleteToken)

display.focus()
display.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || justOpPattern.test(event.key)) {
    evalEquation()
  } else if (!displayPattern.test(formatInput(display.value))) {
    deleteToken()
  }
})
