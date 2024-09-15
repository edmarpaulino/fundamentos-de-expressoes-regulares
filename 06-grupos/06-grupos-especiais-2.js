const texto = 'supermercado superação hiperMERCADO Mercado'

console.log(texto.match(/(?:super)[\wÀ-ú]+/gi))

// Positive Lookbehind
console.log(texto.match(/(?<=super)[\wÀ-ú]+/gi)) // captura as palavras após super (mercado e ação)

// Negative Lookbehind
console.log(texto.match(/(?<!super)mercado/gi)) // captura as palavras mercado que não são precedidas por super
