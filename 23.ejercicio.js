// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

for (const movie of movies) {
  // let movie = movies[i]
  let peliculaPequeña = movies.filter((movie) => movie.durationInMinutes < 100)
  let peliculaMediana = movies.filter(
    (movie) => movie.durationInMinutes >= 100 && movie.durationInMinutes < 200
  )
  let peliculaGrande = movies.filter((movie) => movie.durationInMinutes > 200)

  console.log('peliculaPequeña')
  console.log(peliculaPequeña)
  console.log('peliculaMediana')
  console.log(peliculaMediana)
  console.log('peliculaGrande')
  console.log(peliculaGrande)
  {
    break
  }
}
