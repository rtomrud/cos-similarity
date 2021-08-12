import benchmark from "benchmark";
import computeCosineSimilarity from "compute-cosine-similarity";
import cosineSimilarity from "cosine-similarity";
import { Similarity } from "tiny-tfidf";
import cosSimilarity from "./index.js";

const { Suite } = benchmark;

const dimensions = 100;
const a = [];
const b = [];
let dimension = 0;
while (dimension < dimensions) {
  a.push(Math.random());
  b.push(Math.random());
  dimension += 1;
}

Suite()
  .add("cos-similarity", () => cosSimilarity(a, b))
  .add("compute-cosine-similarity", () => computeCosineSimilarity(a, b))
  .add("cosine-similarity", () => cosineSimilarity(a, b))
  .add("tiny-tfidf cosineSimilarity()", () => Similarity.cosineSimilarity(a, b))
  .on("cycle", (event) => console.log(String(event.target)))
  .on("complete", function () {
    console.log(`\nFastest is ${this.filter("fastest").map("name")}`);
  })
  .run();
