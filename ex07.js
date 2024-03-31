const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inicializarMatriz(linhas, colunas) {
  const matriz = [];
  let count = 1;
  for (let i = 0; i < linhas; i++) {
    matriz.push([]);
    for (let j = 0; j < colunas; j++) {
      matriz[i].push(count++);
    }
  }
  return matriz;
}

rl.question(
  "Digite o número de linhas e colunas (separados por espaço): ",
  (input) => {
    const [linhas, colunas] = input.split(" ").map(Number);
    if (isNaN(linhas) || isNaN(colunas) || linhas <= 0 || colunas <= 0) {
      console.log("Por favor, digite números válidos maiores que zero.");
      rl.close();
      return;
    }

    const matriz = inicializarMatriz(linhas, colunas);

    console.log("Matriz inicializada:");
    matriz.forEach((linha) => console.log(linha.join("\t")));

    rl.close();
  }
);
