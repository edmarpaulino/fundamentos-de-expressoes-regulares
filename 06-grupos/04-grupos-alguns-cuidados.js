const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

// dentro de um conjunto um grupo não existe
// os parênteses são interpretados como caracteres literais
console.log(texto.match(/[(abc)]/gi))
// um conjunto pode existir dentro de um grupo
console.log(texto.match(/([abc])/gi))
// tente evitar o uso de grupos desnecessários
console.log(texto.match(/(abc)/gi))
