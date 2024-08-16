//Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6]

function average(input) {
  const sumAll = input.reduce(
    (acumulador, valorActual) => (valorActual += acumulador)
  )
  console.log(sumAll / input.length)
}

//--------------------------------------------------

average(numbers)
