import Benchmark from "./node_modules/benchmark/benchmark.js";
import computeCosineSimilarity from "./node_modules/compute-cosine-similarity/lib/index.js";
import cosineSimilarity from "./node_modules/cosine-similarity/index.js";
import { cosineSim } from "./node_modules/doc-similarity/src/index.js";
import cosSimilarity from "./index.js";

const suite = Benchmark.Suite();

const dimensions = 100;
const a = [];
const b = [];
let dimension = 0;
while (dimension < dimensions) {
  a.push(Math.random());
  b.push(Math.random());
  dimension += 1;
}

suite
  .add("cos-similarity", () => cosSimilarity(a, b))
  .add("doc-similarity cosineSim", () => cosineSim(a, b))
  .add("compute-cosine-similarity", () => computeCosineSimilarity(a, b))
  .add("cosine-similarity", () => cosineSimilarity(a, b))
  .on("cycle", event => console.log(String(event.target)))
  .on("complete", () =>
    console.log(`\nFastest is ${suite.filter("fastest").map("name")}`)
  )
  .run();
