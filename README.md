# cos-similarity

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

## Benchmark

To run the benchmark, clone the repository and run the bench script:

```bash
npm run bench
```

```
name                                    hz     min     max    mean     p75     p99    p995    p999     rme   samples
cos-similarity               13,520,176.31  0.0001  0.0495  0.0001  0.0001  0.0001  0.0001  0.0001  ±0.03%  13393808   fastest
cosine-similarity-threshold   4,276,436.48  0.0002  2.2570  0.0002  0.0002  0.0004  0.0004  0.0006  ±0.47%   4122061
compute-cosine-similarity     3,836,308.75  0.0002  0.4432  0.0003  0.0003  0.0003  0.0003  0.0003  ±0.09%   3818427
cosine-similarity               181,088.87  0.0054  0.1169  0.0055  0.0055  0.0064  0.0087  0.0108  ±0.07%    180407   slowest
```
