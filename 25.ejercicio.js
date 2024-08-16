// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
for (let i = 0; i < products.length; i++) {
  const product = products[i]
  const initialValue = 0
  const suma = products.reduce(
    (accumulator, currentValue) => accumulator + currentValue.sellCount,
    0
  )
  const media = suma / products.length
  console.log(suma)
  console.log(media)
  {
    break
  }
}
