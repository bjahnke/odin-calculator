import { add, subtract, multiply, divide } from './operation'

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

export { operator }
