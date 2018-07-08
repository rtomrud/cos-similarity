import test from "./node_modules/tape/index.js";
import cosSimilarity from "./index.js";

test("cos-similarity with zero vectors", ({ equal, end }) => {
  equal(cosSimilarity(), 0);
  equal(cosSimilarity([]), 0);
  equal(cosSimilarity([], []), 0);
  equal(cosSimilarity([0], [0]), 0);
  equal(cosSimilarity([0, 0], [0, 0]), 0);
  equal(cosSimilarity([1, 2], [0, 0]), 0);
  equal(cosSimilarity([0, 0], [1, 2]), 0);
  equal(cosSimilarity([-1, -2], [0, 0]), 0);
  equal(cosSimilarity([0, 0], [-1, -2]), 0);
  equal(cosSimilarity([0, 0], [1, -2]), 0);
  equal(cosSimilarity([1, -2], [0, 0]), 0);
  end();
});

test("cos-similarity with orthogonal vectors", ({ equal, end }) => {
  equal(cosSimilarity([0, 2], [4, 0]), 0);
  equal(cosSimilarity([4, 0], [0, 2]), 0);
  equal(cosSimilarity([0, -2], [-4, 0]), 0);
  equal(cosSimilarity([-4, 0], [0, -2]), 0);
  end();
});

test("cos-similarity with parallel vectors", ({ equal, end }) => {
  equal(cosSimilarity([0, 2], [0, 2]), 1);
  equal(cosSimilarity([2, 0], [2, 0]), 1);
  equal(cosSimilarity([1, 2], [1, 2]), 1);
  equal(cosSimilarity([2, 1], [2, 1]), 1);
  equal(cosSimilarity([0, 2], [0, -2]), -1);
  equal(cosSimilarity([0, -2], [0, 2]), -1);
  equal(cosSimilarity([1, 2], [-1, -2]), -1);
  equal(cosSimilarity([-1, -2], [1, 2]), -1);
  end();
});

test("cos-similarity with oblique vectors", ({ equal, end }) => {
  equal(
    cosSimilarity([1, 2], [4, 8]),
    (1 * 4 + 2 * 8) / (Math.sqrt(1 + 4) * Math.sqrt(16 + 64)) + Number.EPSILON
  );
  equal(
    cosSimilarity([-1, -2], [4, 8]),
    -(1 * 4 + 2 * 8) / (Math.sqrt(1 + 4) * Math.sqrt(16 + 64)) - Number.EPSILON
  );
  equal(
    cosSimilarity([1, 2, 4], [8, 16]),
    (1 * 4 + 2 * 8) / (Math.sqrt(1 + 4) * Math.sqrt(16 + 64)) + Number.EPSILON
  );
  equal(
    cosSimilarity([-1, -2], [4, 8]),
    -(1 * 4 + 2 * 8) / (Math.sqrt(1 + 4) * Math.sqrt(16 + 64)) - Number.EPSILON
  );
  equal(
    cosSimilarity([1, 2, 4], [8, 16]),
    (1 * 8 + 2 * 16) / (Math.sqrt(1 + 4) * Math.sqrt(64 + 256)) + Number.EPSILON
  );
  equal(
    cosSimilarity([8, 16], [1, 2, 4]),
    (8 * 1 + 16 * 2) / (Math.sqrt(64 + 256) * Math.sqrt(1 + 4)) + Number.EPSILON
  );
  equal(
    cosSimilarity([-1, -2, -4], [8, 16]),
    -(1 * 8 + 2 * 16) / (Math.sqrt(1 + 4) * Math.sqrt(64 + 256)) -
      Number.EPSILON
  );
  equal(
    cosSimilarity([-8, -16], [1, 2, 4]),
    -(8 * 1 + 16 * 2) / (Math.sqrt(64 + 256) * Math.sqrt(1 + 4)) -
      Number.EPSILON
  );
  end();
});
