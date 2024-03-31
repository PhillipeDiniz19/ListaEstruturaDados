const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularFatorial(n) {
  if (n === 0) {
    return "0! = 1";
  }
  let resultado = `${n}! = ${n}`;
  let fatorial = n;
  for (let i = n - 1; i > 0; i--) {
    resultado += ` x ${i}`;
    fatorial *= i;
  }
  resultado += ` = ${fatorial}`;
  return resultado;
}

rl.question("Digite um número inteiro positivo: ", (answer) => {
  const numero = parseInt(answer);

  if (Number.isNaN(numero) || numero < 0) {
    console.log("Por favor, digite um número inteiro positivo válido.");
    rl.close();
    return;
  }

  const fatorial = calcularFatorial(numero);
  console.log(`Fatorial de ${numero}: ${fatorial}`);

  rl.close();
});
