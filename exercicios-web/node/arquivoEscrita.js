const fs = require('fs')

const produto = {
    nome: 'Samsung M51',
    preco: 1749.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado2.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})