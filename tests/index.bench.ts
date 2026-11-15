import computeCosineSimilarityExport from "compute-cosine-similarity";
import cosineSimilarityExport from "cosine-similarity";
import { cosineSimilarity as cosineSimilarityThresholdExport } from "cosine-similarity-threshold";
import { test } from "vite-plus/test";
import cosSimilarityExport from "../src/index.ts";

// Read each export once, since the module runner wraps exports in getters
const cosSimilarity = cosSimilarityExport;
const computeCosineSimilarity = computeCosineSimilarityExport;
const cosineSimilarity = cosineSimilarityExport;
const cosineSimilarityThreshold = cosineSimilarityThresholdExport;

const length = 100;
const a = Array.from({ length }, () => Math.random());
const b = Array.from({ length }, () => Math.random());

test("cosine similarity modules", async ({ bench }) => {
  await bench.compare(
    bench("cos-similarity", () => {
      cosSimilarity(a, b);
    }),
    bench("compute-cosine-similarity", () => {
      computeCosineSimilarity(a, b);
    }),
    bench("cosine-similarity", () => {
      cosineSimilarity(a, b);
    }),
    bench("cosine-similarity-threshold", () => {
      cosineSimilarityThreshold(a, b);
    }),
  );
});
