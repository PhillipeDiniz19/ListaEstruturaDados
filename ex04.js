function encontrarIndices(vetor, numero) {
  const indices = [];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
      indices.push(i);
    }
  }
  return indices;
}

const vetor = [1, 2, 3, 4, 2, 5, 2];
const numero = 2;
const indices = encontrarIndices(vetor, numero);
console.log(`O número ${numero} aparece nos índices: ${indices}`);
