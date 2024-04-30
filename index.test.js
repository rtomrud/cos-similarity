import test from "node:test";
import assert from "node:assert/strict";
import cosSimilarity from "./index.js";

test("cos-similarity with no arguments", () => {
  assert.equal(cosSimilarity(), 0);
});

test("cos-similarity with zero vectors", () => {
  assert.equal(cosSimilarity([]), 0);
  assert.equal(cosSimilarity([], []), 0);
  assert.equal(cosSimilarity([0], [0]), 0);
  assert.equal(cosSimilarity([0, 0], [0, 0]), 0);
});

test("cos-similarity with zero and non-zero vectors", () => {
  assert.equal(cosSimilarity([1, 2], [0, 0]), 0);
  assert.equal(cosSimilarity([0, 0], [1, 2]), 0);
  assert.equal(cosSimilarity([-1, -2], [0, 0]), 0);
  assert.equal(cosSimilarity([0, 0], [-1, -2]), 0);
});

test("cos-similarity with orthogonal vectors", () => {
  assert.equal(cosSimilarity([0, 2], [4, 0]), 0);
  assert.equal(cosSimilarity([4, 0], [0, 2]), 0);
  assert.equal(cosSimilarity([0, -2], [-4, 0]), 0);
  assert.equal(cosSimilarity([-4, 0], [0, -2]), 0);
});

test("cos-similarity with equal vectors", () => {
  assert.equal(cosSimilarity([0, 2], [0, 2]), 1);
  assert.equal(cosSimilarity([2, 0], [2, 0]), 1);
  assert.equal(cosSimilarity([1, 2], [1, 2]), 1);
  assert.equal(cosSimilarity([2, 1], [2, 1]), 1);
});

test("cos-similarity with opposite vectors", () => {
  assert.equal(cosSimilarity([0, 2], [0, -2]), -1);
  assert.equal(cosSimilarity([0, -2], [0, 2]), -1);
  assert.equal(cosSimilarity([1, 2], [-1, -2]), -1);
  assert.equal(cosSimilarity([-1, -2], [1, 2]), -1);
});

test("cos-similarity with oblique vectors", () => {
  assert.equal(cosSimilarity([1, 2], [3, 4]), 0.9838699100999074);
  assert.equal(cosSimilarity([-1, -2], [-3, -4]), 0.9838699100999074);
  assert.equal(cosSimilarity([-1, -2], [3, 4]), -0.9838699100999074);
  assert.equal(cosSimilarity([1, 2], [-3, -4]), -0.9838699100999074);
});

test("cos-similarity with vectors of different dimensions", () => {
  assert.equal(cosSimilarity([1, 2, 4], [4, 8]), 1);
  assert.equal(cosSimilarity([1, 2], [4, 8, 16]), 1);
});
