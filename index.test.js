import cosSimilarity from "./index.js";

test("cos-similarity with no arguments", () => {
  expect(cosSimilarity()).toBe(0);
});

test("cos-similarity with zero vectors", () => {
  expect(cosSimilarity([])).toBe(0);
  expect(cosSimilarity([], [])).toBe(0);
  expect(cosSimilarity([0], [0])).toBe(0);
  expect(cosSimilarity([0, 0], [0, 0])).toBe(0);
});

test("cos-similarity with zero and non-zero vectors", () => {
  expect(cosSimilarity([1, 2], [0, 0])).toBe(0);
  expect(cosSimilarity([0, 0], [1, 2])).toBe(0);
  expect(cosSimilarity([-1, -2], [0, 0])).toBe(0);
  expect(cosSimilarity([0, 0], [-1, -2])).toBe(0);
});

test("cos-similarity with orthogonal vectors", () => {
  expect(cosSimilarity([0, 2], [4, 0])).toBe(0);
  expect(cosSimilarity([4, 0], [0, 2])).toBe(0);
  expect(cosSimilarity([0, -2], [-4, 0])).toBe(0);
  expect(cosSimilarity([-4, 0], [0, -2])).toBe(0);
});

test("cos-similarity with equal vectors", () => {
  expect(cosSimilarity([0, 2], [0, 2])).toBe(1);
  expect(cosSimilarity([2, 0], [2, 0])).toBe(1);
  expect(cosSimilarity([1, 2], [1, 2])).toBe(1);
  expect(cosSimilarity([2, 1], [2, 1])).toBe(1);
});

test("cos-similarity with opposite vectors", () => {
  expect(cosSimilarity([0, 2], [0, -2])).toBe(-1);
  expect(cosSimilarity([0, -2], [0, 2])).toBe(-1);
  expect(cosSimilarity([1, 2], [-1, -2])).toBe(-1);
  expect(cosSimilarity([-1, -2], [1, 2])).toBe(-1);
});

test("cos-similarity with oblique vectors", () => {
  expect(cosSimilarity([1, 2], [4, 8])).toBeCloseTo(
    (1 * 4 + 2 * 8) / (Math.sqrt(1 ** 2 + 2 ** 2) * Math.sqrt(4 ** 2 + 8 ** 2))
  );
  expect(cosSimilarity([-1, -2], [-4, -8])).toBeCloseTo(
    (-1 * -4 + -2 * -8) /
      (Math.sqrt((-1) ** 2 + (-2) ** 2) * Math.sqrt((-4) ** 2 + (-8) ** 2))
  );
  expect(cosSimilarity([-1, -2], [4, 8])).toBeCloseTo(
    (-1 * 4 + -2 * 8) /
      (Math.sqrt((-1) ** 2 + (-2) ** 2) * Math.sqrt(4 ** 2 + 8 ** 2))
  );
  expect(cosSimilarity([1, 2], [-4, -8])).toBeCloseTo(
    (-4 + 2 * -8) /
      (Math.sqrt(1 ** 2 + 2 ** 2) * Math.sqrt((-4) ** 2 + (-8) ** 2))
  );
});

test("cos-similarity with vectors of different dimensions", () => {
  expect(cosSimilarity([1, 2, 4], [4, 8])).toBeCloseTo(
    (1 * 4 + 2 * 8) / (Math.sqrt(1 ** 2 + 2 ** 2) * Math.sqrt(4 ** 2 + 8 ** 2))
  );
  expect(cosSimilarity([1, 2], [4, 8, 16])).toBeCloseTo(
    (1 * 4 + 2 * 8) / (Math.sqrt(1 ** 2 + 2 ** 2) * Math.sqrt(4 ** 2 + 8 ** 2))
  );
});
