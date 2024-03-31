function decimalParaHexadecimal(decimal) {
  if (decimal < 0) {
    return "O número deve ser um inteiro positivo.";
  }

  return decimal.toString(16).toUpperCase();
}

// Exemplo de uso:
const numeroDecimal = 255;
const numeroHexadecimal = decimalParaHexadecimal(numeroDecimal);
console.log(
  `O número decimal ${numeroDecimal} é igual a ${numeroHexadecimal} em hexadecimal.`
);
