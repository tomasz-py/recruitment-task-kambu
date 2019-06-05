import { roundToTwo, convertEuroToPLN } from "./index";

//Unity tests for roundToTwo function
test("round 20 expect 20", () => {
  expect(roundToTwo(20)).toBe(20);
});

test("round 2.2 expect 2.2", () => {
  expect(roundToTwo(2.2)).toBe(2.2);
});

test("round 2.205 expect 2.21", () => {
  expect(roundToTwo(2.205)).toBe(2.21);
});

test("round 10.0002 expect 2.2", () => {
  expect(roundToTwo(10.0002)).toBe(10.0);
});

test("round 1.005 expect 1.01", () => {
  expect(roundToTwo(1.005)).toBe(1.01);
});

test("round 8.000009 expect 8.0", () => {
  expect(roundToTwo(8.000009)).toBe(8.0);
});

test("round 8.195009 expect 8.0", () => {
  expect(roundToTwo(8.195009)).toBe(8.2);
});

test("round 8.995009 expect 9.0", () => {
  expect(roundToTwo(8.995009)).toBe(9.0);
});

test("round 8.995009 expect 9.0", () => {
  expect(roundToTwo(8.994909)).toBe(8.99);
});

//Unity tests for convertEuroToPLN function
test("convert", () => {
  expect(convertEuroToPLN(1254.54, 4.35)).toBeCloseTo(5457.249, 5);
});

test("convert", () => {
  expect(convertEuroToPLN(12.99, 0.35)).toBeCloseTo(4.5465, 5);
});

test("convert", () => {
  expect(convertEuroToPLN(1.01, 4.12)).toBeCloseTo(4.1612, 5);
});

test("convert", () => {
  expect(convertEuroToPLN(1.01, 4.12)).toBeCloseTo(4.1612, 5);
});

test("convert", () => {
  expect(convertEuroToPLN(10008.1, 4.25874)).toBeCloseTo(42621.895794, 5);
});
