const porta = 3003
const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// app.use(bodyParser.urlencoded({extended: true}))
const BancoDeDados = require('./BancoDeDados')
// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next()
// })

app.get('/produtos', (req, res, next) => {
    //res.send({nome: 'Noteook Dell', preco: 9850.75}) //converte p/ JSON
    res.send(BancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req, res, next) => {
    res.send(BancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = BancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = BancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = BancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})


// app.post('/produtos', (req, res, next) => {
//     res.send({nome: 'Noteook Dell Post', preco: 5550.75}) //converte p/ JSON
// })

//Para qualquer requisição
// app.use('/produtos', (req, res, next) => {
//     res.send({nome: 'Noteook Dell', preco: 9850.75}) //converte p/ JSON
// })

app.listen(porta, () => {
    console.log(`Servidor executando na porta: ${porta}.`)
})