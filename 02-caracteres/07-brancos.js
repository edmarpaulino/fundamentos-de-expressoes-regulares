const texto = `
ca\tr
r\to s!
`
// Além do espaço, o \s é o shorthand para outros "brancos" \t\n\f (whitespaces)
console.log(texto.match(/ca\tr\nr\to\ss!/))