//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:

function sumAll(acumulador, valorActual) {
  return acumulador + valorActual
}

const numbers = [1, 2, 3, 5, 45, 37, 58]
const resultado = numbers.reduce(sumAll)
console.log(resultado)
