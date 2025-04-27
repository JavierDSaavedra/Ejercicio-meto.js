// ! 8. Crea un array de números y usa reduce para obtener la suma total.

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let suma = numeros.reduce((todo, numero) => { return todo + numero;
})
console.log(suma) 

