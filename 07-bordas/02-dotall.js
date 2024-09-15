const texto =
  'Romário era um excelente jogador\n, mas hoje é um político questionador'

// problema do dotall
console.log(texto.match(/^r.*r$/gi)) // retorna null porque o ponto não resolve '\n'

// maneira de resolver o problema do dotall em JS
// \s -> espaços em branco
// \S -> não espaços em branco
console.log(texto.match(/^r[\s\S]*r$/gi))
