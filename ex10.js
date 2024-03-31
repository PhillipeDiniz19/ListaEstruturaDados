class Pilha {
  constructor() {
    this.itens = [];
  }

  empilhar(elemento) {
    this.itens.push(elemento);
  }

  desempilhar() {
    if (this.estaVazia()) {
      return null;
    }
    return this.itens.pop();
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  imprimir() {
    console.log(this.itens.join(", "));
  }
}

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pilhaPar = new Pilha();
const pilhaImpar = new Pilha();
const numeros = [];

rl.question("Digite 10 números separados por espaço: ", (input) => {
  const nums = input.split(" ").map(Number);

  nums.forEach((numero) => {
    numeros.push(numero);

    if (numero === 0) {
      const desempilhadoPar = pilhaPar.desempilhar();
      const desempilhadoImpar = pilhaImpar.desempilhar();

      if (desempilhadoPar === null || desempilhadoImpar === null) {
        console.log("Erro: Alguma pilha está vazia.");
      } else {
        console.log(`Desempilhado da pilha par: ${desempilhadoPar}`);
        console.log(`Desempilhado da pilha ímpar: ${desempilhadoImpar}`);
      }
    } else if (numero % 2 === 0) {
      pilhaPar.empilhar(numero);
    } else {
      pilhaImpar.empilhar(numero);
    }
  });

  console.log("Elementos desempilhados da pilha par:");
  while (!pilhaPar.estaVazia()) {
    console.log(pilhaPar.desempilhar());
  }

  console.log("Elementos desempilhados da pilha ímpar:");
  while (!pilhaImpar.estaVazia()) {
    console.log(pilhaImpar.desempilhar());
  }

  rl.close();
});
