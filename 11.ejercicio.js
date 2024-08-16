//Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:   pista (typeof)

let mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(input) {
  let countNum = 0
  let countStr = 0

  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] === 'number') {
      countNum = countNum + input[i]
    }
    if (typeof input[i] === 'string') {
      countStr = countStr + input[i].length
    }
    console.log(countNum, countStr)
  }
}
averageWord(mixedElements)
