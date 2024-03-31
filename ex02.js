function ordenarNumeros(array) {
  if (array.length !== 3) {
    return "O array deve conter exatamente três números.";
  }

  if (array[0] > array[1]) {
    var temp = array[0];
    array[0] = array[1];
    array[1] = temp;
  }
  if (array[1] > array[2]) {
    var temp = array[1];
    array[1] = array[2];
    array[2] = temp;

    if (array[0] > array[1]) {
      var temp = array[0];
      array[0] = array[1];
      array[1] = temp;
    }
  }
  return array;
}

var array = [7, 2, 10];
console.log("Array original:", array);
var arrayOrdenado = ordenarNumeros(array);
console.log("Array ordenado:", arrayOrdenado);
