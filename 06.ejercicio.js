//!1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
//for (let numero = 0; numero < 10; numero = numero + 1) {
// console.log(numero)}

//1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
//cuando el resto del numero dividido entre 2 sea 0.

//for (let numero = 0; numero < 10; numero++) {
// if (numero % 2 === 0 && numero != 0) {
// console.log(numero)
// }
//}

//?1.3 Crea un bucle para conseguir dormir contando ovejas.
//?Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
//?Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
//?y cambia el mensaje en la décima vuelta a 'Dormido!'.

for (let vuelta = 0; vuelta < 11; vuelta++) {
  if (vuelta < 10 && vuelta != 0) {
    console.log(vuelta + 'Intentando dormir 🐑')
  } else {
    console.log(vuelta + 'Dormido!')
  }
}
