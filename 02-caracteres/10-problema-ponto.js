const texto = 'Bom\ndia'
console.log(texto.match(/./gi)) // o ponto não engloba o \n
console.log(texto.match(/..../gi))

// dotall - algumas linguagens tem uma flag /exp/s para resolver este problema
console.log(texto.match(/./gis))
console.log(texto.match(/..../gis))