function ordenarNumeros(array) {
  if (array.length !== 2) {
    return "O array deve conter exatamente dois números.";
  }

  if (array[0] > array[1]) {
    var temp = array[0];
    array[0] = array[1];
    array[1] = temp;
  }

  return array;
}

var array = [5, 2];
console.log("Array original:", array);
var arrayOrd = ordenarNumeros(array);
console.log("Array ordenado:", arrayOrd);
