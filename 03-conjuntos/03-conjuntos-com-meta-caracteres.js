const texto = '.$+*?-'

// dentro do conjunto ele tem suas próprias regras

// detro do conjuntos os caracteres são literais (a maioria)
console.log(texto.match(/[+.?*$]./g)) // não precisa de escape dentro do conjunto
console.log(texto.match(/[$-?]/g)) // isso é um intervalo (range)

// NÃO é um intervalo (range)...
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// pode precisar de escape dentro do conjunto: - [ ] ^