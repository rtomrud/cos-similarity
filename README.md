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

To run the benchmark, clone the repositry and run the bench script:

```bash
npm run bench
```

```
benchmark                        time (avg)             (min … max)
-------------------------------------------------------------------
• cosine similarity modules
-------------------------------------------------------------------
cos-similarity                  249 ns/iter       (247 ns … 319 ns)
compute-cosine-similarity       854 ns/iter       (829 ns … 428 µs)
cosine-similarity            14'251 ns/iter    (13'680 ns … 229 µs)
cosine-similarity-threshold     879 ns/iter       (802 ns … 310 µs)

summary for cosine similarity modules
  cos-similarity
   3.43x faster than compute-cosine-similarity
   3.53x faster than cosine-similarity-threshold
   57.25x faster than cosine-similarity
```
