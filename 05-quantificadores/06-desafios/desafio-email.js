const texto = `Os e-mails dos convidades são:
  - fulano@cod3r.com.br
  - xico@gmail.com`

console.log(texto.match(/\w{1,}@\w{1,}\.com(\.\w{2})?/g))
