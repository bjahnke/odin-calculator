let first, second, op

const display = document.querySelector('.display')

// allow for 8, 8 *, 8 * 8, but not * 8
const displayPattern = /^(?:\d+)(?:\s[+\-*/]\s\d*)?$/

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
  }
}

function clearInputs () {
  display.textContent = ''
  first = ''
  second = ''
  op = ''
}

function evalEquation () {
  const tokens = display.textContent.split(' ')
  if (tokens.length === 3) {
    first = parseInt(tokens[0])
    op = tokens[1]
    second = parseInt(tokens[2])
    const result = operator(first, second, op)
    console.log(result)
  }
}

const calcButtons = document.querySelectorAll('button.op,button.num')
console.group(calcButtons)
calcButtons.forEach(button => button.addEventListener('click', updateDisplay))

const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', clearInputs)

const equalButton = document.querySelector('#equals')
equalButton.addEventListener('click', evalEquation)
