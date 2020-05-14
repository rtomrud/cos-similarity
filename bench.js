const Benchmark = require("./node_modules/benchmark/benchmark.js");
const computeCosineSimilarity = require("./node_modules/compute-cosine-similarity/lib/index.js");
const cosineSimilarity = require("./node_modules/cosine-similarity/index.js");
const { cosineSim } = require("./node_modules/doc-similarity/src/index.js");
const cosSimilarity = require("./dist/index.js");

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
  .on("cycle", (event) => console.log(String(event.target)))
  .on("complete", () =>
    console.log(`\nFastest is ${suite.filter("fastest").map("name")}`)
  )
  .run();
