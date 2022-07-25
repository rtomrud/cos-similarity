# cos-similarity

[![build status](https://github.com/rtomrud/cos-similarity/workflows/ci/badge.svg)](https://github.com/rtomrud/cos-similarity/actions?query=branch%3Amaster+workflow%3Aci)
[![npm version](https://badgen.net/npm/v/cos-similarity)](https://www.npmjs.com/package/cos-similarity)
[![bundle size](https://badgen.net/bundlephobia/minzip/cos-similarity)](https://bundlephobia.com/result?p=cos-similarity)

Computes the [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity) between two vectors

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

## License

[MIT](./LICENSE)
