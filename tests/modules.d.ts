// Declarations for the untyped modules compared in the benchmark

declare module "cosine-similarity" {
  export default function cosineSimilarity(a: number[], b: number[]): number;
}

declare module "cosine-similarity-threshold" {
  export function cosineSimilarity(a: number[], b: number[]): number;
}
