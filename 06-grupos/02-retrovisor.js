// o grupo armazena o que ele capturou
// para cada grupo você possui um retrovisor \1 = contra barra e o número do grupo (ordem)
const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))
// ?: não armazena o valor capturado do grupo
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))

// usando o valor capturado no replace
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))

// curiosidade: retrovisor além do 9 no JS
const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))
