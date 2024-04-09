import { add, subtract, multiply, divide } from './operation'

describe('add', () => {
  test('should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(-5, 10)).toBe(5)
    expect(add(0, 0)).toBe(0)
  })
})

describe('subtract', () => {
  test('should return the difference between two numbers', () => {
    expect(subtract(5, 3)).toBe(2)
    expect(subtract(10, -5)).toBe(15)
    expect(subtract(0, 0)).toBe(0)
  })
})

describe('multiply', () => {
  test('should return the product of two numbers', () => {
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(-5, 10)).toBe(-50)
    expect(multiply(0, 5)).toBe(0)
  })
})

describe('divide', () => {
  test('should return the quotient of two numbers', () => {
    expect(divide(6, 3)).toBe(2)
    expect(divide(-50, 10)).toBe(-5)
    expect(divide(0, 5)).toBe(0)
  })

  test('should throw an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero')
  })
})
