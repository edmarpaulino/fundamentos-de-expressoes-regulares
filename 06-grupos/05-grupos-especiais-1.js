const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))

// Positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi)) // palavras que têm vírgula após
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi)) // palavras que têm ponto após
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi)) // palavras que têm 'vírgula mas' após

// Negative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi)) // palavras que não precedam vírgula ('é' não foi pego pois é considerado uma borda)
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi)) // palavras que não precedam vírgula (captura o 'é' por que não está usando o \b sugar sintax)
