/**
 * Returns the cosine similarity between the given `vectorA` and `vectorB`.
 * Returns `0` when given a zero vector, `[]`, `undefined` or nothing.
 *
 * @param vectorA The first vector.
 * @param vectorB The second vector.
 * @returns The cosine similarity between the two vectors.
 */
export default function cosSimilarity(
  vectorA: ArrayLike<number> = [],
  vectorB: ArrayLike<number> = [],
): number {
  const dimensionality = Math.min(vectorA.length, vectorB.length);
  let dotAB = 0;
  let dotA = 0;
  let dotB = 0;
  let dimension = 0;
  while (dimension < dimensionality) {
    const componentA = vectorA[dimension];
    const componentB = vectorB[dimension];
    dotAB += componentA * componentB;
    dotA += componentA * componentA;
    dotB += componentB * componentB;
    dimension += 1;
  }

  const magnitude = Math.sqrt(dotA * dotB);
  return magnitude === 0 ? 0 : dotAB / magnitude;
}
