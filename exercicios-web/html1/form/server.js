const porta = 3003
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


app.post('/usuarios',(req,resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns!! - Usuário Incluído</h1>')
})
app.get('/usuarios1',(req,resp) => {
    console.log(req.query)
    resp.send('<h1>Parabéns!! - Usuário Consultado</h1>')
})
app.post('/usuarios/:id',(req,resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns!! - Usuário Alterado</h1>')
})

// app.listen(3003)
app.listen(porta, () => {
    console.log(`Servidor escutando na porta: ${porta}.`)
})