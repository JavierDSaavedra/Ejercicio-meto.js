// ! 6) Crea un array de objetos donde cada objeto tenga un nombre y una edad. Luego, muestra en consola el nombre de cada persona usando forEach.

ArrayPersonas = [
    { nombre: "Javier", edad: 21 },
    { nombre: "Matias", edad: 20 },
    { nombre: "Juan", edad: 21 },
    { nombre: "Walter", edad: 20 },
    { nombre: "Fernanda", edad: 30 }
]

ArrayPersonas.forEach(persona => 
    console.log(persona.nombre)
)
