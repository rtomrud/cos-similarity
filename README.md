# cos-similarity

[![npm version](https://img.shields.io/npm/v/cos-similarity.svg?style=flat-square)](https://www.npmjs.com/package/cos-similarity)
[![Build Status](https://travis-ci.com/rtomrud/cos-similarity.svg?branch=master)](https://travis-ci.com/rtomrud/cos-similarity)
[![Coverage Status](https://coveralls.io/repos/github/rtomrud/cos-similarity/badge.svg?branch=master)](https://coveralls.io/github/rtomrud/cos-similarity?branch=master)
[![Code size](https://badgen.net/bundlephobia/minzip/cos-similarity)](https://bundlephobia.com/result?p=cos-similarity)

Computes the [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity) between two vectors

- Optimized for dense vectors, that is, arrays
- Works with different length vectors, ignoring the additional dimensions of the longest one
- Works with zero vectors, returning `0` if any vector is `0`, `undefined` or `[]`

## Installing

```bash
npm install cos-similarity
```

## API

### `cosSimilarity(vectorA, vectorB)`

Returns the cosine similarity between the given `vectorA` and `vectorB`. Returns `0` when given a zero vector, `[]`, `undefined` or nothing.

```js
import cosSimilarity from "cos-similarity";

cosSimilarity([1, 2, 4], [1, 0, 2]); // -> 0.8783100656536799
cosSimilarity([1, 2, 0], [1, 2, 0]); // -> 1
cosSimilarity([2, 0, 0], [0, 2, 0]); // -> 0
cosSimilarity([-1, -2, 0], [1, 2, 0]); // -> -1
```

## Benchmark

```bash
cosine-similarity x 56,881 ops/sec ±0.25% (97 runs sampled)
compute-cosine-similarity x 1,036,728 ops/sec ±0.12% (98 runs sampled)
doc-similarity cosineSim x 7,230,600 ops/sec ±0.86% (94 runs sampled)
cos-similarity x 7,317,571 ops/sec ±0.73% (95 runs sampled)

Fastest is cos-similarity
```

To run the benchmark:

```bash
git clone https://github.com/rtomrud/cos-similarity.git
cd cos-similarity
npm install
npm run bench
```

## License

[MIT](./LICENSE)
