const texto = `Lista telefônica:
  - (11) 98756-1212
  - 98765-4321`

console.log(texto.match(/(\(\d{2}\).?)?\d{5}-?\d{4}/g))
