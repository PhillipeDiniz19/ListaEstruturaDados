const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

rl.question("Digite um número inteiro positivo: ", (answer) => {
  const numero = parseInt(answer);

  if (Number.isNaN(numero) || numero <= 0) {
    console.log("Por favor, digite um número inteiro positivo válido.");
    rl.close();
    return;
  }

  const sequenciaFibonacci = fibonacci(numero);
  console.log(
    `Os primeiros ${numero} números de Fibonacci são: ${sequenciaFibonacci.join(
      ", "
    )}`
  );

  rl.close();
});
