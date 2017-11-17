import { brierScore } from '.';

test('expects a number between 0 and 1 returned with posititve outcome', () => (
	expect(brierScore({ probability: 0.7, outcome: true }))
	.toBeGreaterThanOrEqual(0)
))

test('expects a number between 0 and 1 returned with posititve outcome', () => (
	expect(brierScore({ probability: 0.7, outcome: true }))
	.toBeLessThanOrEqual(1)
))

test('expects a number between 0 and 1 returned with negative outcome', () => (
	expect(brierScore({ probability: 0.7, outcome: false }))
	.toBeGreaterThanOrEqual(0)
))
test('expects a number between 0 and 1 returned with negative outcome', () => (
	expect(brierScore({ probability: 0.7, outcome: false }))
	.toBeLessThanOrEqual(1)
))
/*
test('expects to throw error when probability are not passed', () => (
	expect(brierScore({ outcome: false })).toThrowError()
))

test('expects to throw error when outcome are not passed', () => (
	expect(brierScore({ probability: 0.7 })).toThrowError()
))
*/
test('expects 0.09 when passed probability 0.7 and outcome true', () => (
	expect(brierScore({ probability: 0.7, outcome: true })).toBeCloseTo(0.09, 2)
))

test('expects 0.49 when passed probability 0.7 and outcome false', () => (
	expect(brierScore({ probability: 0.7, outcome: false })).toBeCloseTo(0.49, 2)
))