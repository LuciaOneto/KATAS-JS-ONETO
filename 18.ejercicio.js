// Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]
for (i = 0; i < placesToTravel.length; i++) {
  const places = placesToTravel[i]
  if (places.id === 11) {
    delete places.id
    delete places.name
  }
  if (places.id === 40) {
    delete places.id
    delete places.name
  }
}
console.log(placesToTravel)
