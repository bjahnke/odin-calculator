/*
* @jest-environment jsdom
*/

import * as fs from 'fs'
import * as path from 'path'
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8')

import { add, subtract, multiply, divide, operator } from './script'

// Test addition
describe('Calculator Functions', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
  })
  describe('Math Operations', () => {
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
  })
  
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
})

