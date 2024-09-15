const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto.match(/\n/g))
// retrovisor é o mesmo caracter do início da linha e deve estar no final da linha
console.log(texto.match(/^(\w).+\1$/g)) // null
console.log(texto.match(/^(\w).+\1$/gim)) // cada uma das frases separadas
