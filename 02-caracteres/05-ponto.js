// . é um coringa, válido para uma posição

const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g)) // true 1,2
console.log(texto.match(/1..2/g)) // nao tem ocorrência de 1 e 2 com 2 caracteres separando eles
console.log(texto.match(/1..,/g)) // true 1,2,

const notas = '8.3,7.1,8.8,10.0'
console.log(notas.match(/8../g)) // true 8.3 8.8
console.log(notas.match(/.\../g)) // true '8.3', '7.1', '8.8', '0.0'