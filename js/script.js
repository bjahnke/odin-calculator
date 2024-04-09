const display = document.querySelector('.display')

// allow for 8, 8 *, 8 * 8, but not * 8
const displayPattern = /^(?:\d+)(?:\s[+\-*/]\s\d*)?$/
const opPattern = /\s[+\-*/]\s/

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

function updateDisplay () {
  const newString = display.textContent + this.textContent
  if (displayPattern.test(newString)) {
    display.textContent = newString
  } else if (opPattern.test(this.textContent)) {
    if (evalEquation() === true) {
      display.textContent += this.textContent
    }
  }
}

function clearInputs () {
  display.textContent = ''
}

function evalEquation () {
  const tokens = display.textContent.trim().split(' ')
  let evaled = false
  if (tokens.length === 3) {
    const first = parseInt(tokens[0])
    const op = tokens[1]
    const second = parseInt(tokens[2])
    if (op === '/' && second === 0) {
      alert('Divide by 0 not allowed!')
      clearInputs()
      return evaled
    }
    evaled = true
    display.textContent = operator(first, second, op)
  }
  return evaled
}

const calcButtons = document.querySelectorAll('button.op,button.num')
console.group(calcButtons)
calcButtons.forEach(button => button.addEventListener('click', updateDisplay))

const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', clearInputs)

const equalButton = document.querySelector('#equals')
equalButton.addEventListener('click', evalEquation)
