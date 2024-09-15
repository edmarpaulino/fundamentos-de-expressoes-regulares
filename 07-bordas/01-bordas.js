const texto =
  'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
// dentro de um conjunto o circunflexo significa que o conjunto é negado
// fora de um conjunto o circunflexo significa início de linha
console.log(texto.match(/^r/gi)) // ^ início da linha/string
console.log(texto.match(/r$/gi)) // $ fim da linha/string

// problema do dotall
console.log(texto.match(/^r.*r$/gi)) // retorna null porque o ponto não resolve '\n'
