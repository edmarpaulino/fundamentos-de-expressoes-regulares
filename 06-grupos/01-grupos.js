const texto1 = 'O José Simão é muito engraçado... hehehehehe'
console.log(texto1.match(/(he)+/g))

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'
console.log(texto2.match(/(http:\/\/)?(www\.)?\w{1,}\.\w{1,}(\.\w{2})?/g))
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))
