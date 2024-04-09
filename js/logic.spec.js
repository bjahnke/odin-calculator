import { add, subtract, multiply, divide } from './operation'
import { operator } from './logic'

// Test addition
test('Addition', () => {
  expect(operator(2, 3, '+')).toBe(add(2, 3))
})

// Test subtraction
test('Subtraction', () => {
  expect(operator(5, 2, '-')).toBe(subtract(5, 2))
})

// Test multiplication
test('Multiplication', () => {
  expect(operator(4, 6, '*')).toBe(multiply(4, 6))
})

// Test division
test('Division', () => {
  expect(operator(10, 2, '/')).toBe(divide(10, 2))
})
