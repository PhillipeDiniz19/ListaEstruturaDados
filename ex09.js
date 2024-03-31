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

const pilha = new Pilha();
const numeros = [];

rl.question("Digite 10 números separados por espaço: ", (input) => {
  const nums = input.split(" ").map(Number);

  nums.forEach((numero) => {
    numeros.push(numero);

    if (numero % 2 === 0) {
      pilha.empilhar(numero);
    } else {
      const desempilhado = pilha.desempilhar();
      if (desempilhado === null) {
        console.log("A pilha está vazia.");
      } else {
        console.log(`Desempilhado: ${desempilhado}`);
      }
    }
  });

  console.log("Elementos na pilha:");
  pilha.imprimir();

  rl.close();
});
