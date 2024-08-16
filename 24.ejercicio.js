// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

for (let i = 0; i < products.length; i++) {
  const initialValue = 0
  const suma = products.reduce(
    (accumulator, currentValue) => accumulator + currentValue.sellCount,
    0
  )
  console.log(suma)
  {
    break
  }
}
