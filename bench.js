import computeCosineSimilarity from "compute-cosine-similarity";
import cosineSimilarity from "cosine-similarity";
import { cosineSimilarity as cosineSimilarityThreshold } from "cosine-similarity-threshold";
import { bench, group, run } from "mitata";
import cosSimilarity from "./index.js";

const length = 100;
const a = Array.from({ length }, () => Math.random());
const b = Array.from({ length }, () => Math.random());

group("cosine similarity modules", () => {
  bench("cos-similarity", () => cosSimilarity(a, b));
  bench("compute-cosine-similarity", () => computeCosineSimilarity(a, b));
  bench("cosine-similarity", () => cosineSimilarity(a, b));
  bench("cosine-similarity-threshold", () => cosineSimilarityThreshold(a, b));
});

await run({ percentiles: false });
