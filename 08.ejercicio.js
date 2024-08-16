// Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero. Puedes usar este array para probar tu función:

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
// Funcion para obtener la longitud de cada elemento

function getLengths(arr) {
  return arr.map((item) => ({ item, length: item.length }))
}

// Funcion para ordenar por longitud de mayor a menor y devolver la primera coincidencia en caso de empate

function sortAndFindLongest(arr) {
  //Obtener longitudes
  const lengths = getLengths(arr)
  // Ordenar por longitud de mayor a menor
  lengths.sort((a, b) => b.length - a.length)
  // Devolver el array ordenado por longitud y el primer elemento mas largo
  const sortedArray = lengths.map((obj) => obj.item)
  const longest = sortedArray[0]
  return { sortedArray, longest }
}
//llamada a la funcion y mostrar resultados
const result = sortAndFindLongest(avengers)
console.log(result.sortedArray)
console.log(result.longest)
