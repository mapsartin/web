const express = require('express')
const app = express()

// .use para get ou post
// poderia ser app.get ou app.post ou app.all
let i = 0


// app.use((req, res) => {
//     res.send('Estou <b>bem!!</b>')
// })

app.use('/ola',(req, res, next) => {
    i++
    console.log(`Antes...${i}`)
    next()
})

app.get('/ola',(req, res, next) => {
    console.log(`Durante...${i}`)
// Retorno de objeto com informações das requisições e dados
res.json({
    data:[ // Poderia colocar os dados em um array
        {id: 5, nome: 'Ana', position: 1},
        {id: 7, nome: 'Carlos', position: 2},
        {id: 13, nome: 'Bia', position: 3}
    ],
    count: 30, // Quantos registros tem no BD
    skip: 0, // Paginação, quantos já pulou? em qual está?
    limit: 3, // Quantos registros na página, limitado a 3
    status: 200 //Outras informações da requisição
})
next()
//Retorno de array
    // res.json([
    //     {id: 5, nome: 'Ana', position: 1},
    //     {id: 7, nome: 'Carlos', position: 2},
    //     {id: 13, nome: 'Bia', position: 3}
    // ])

//retorno de objeto
    // res.json({
    //     nome:"Notebook XPX",
    //     preco:3550.99,
    //     desconto: 0.12

    // })
    // res.send('<h1>Seja <b>bem vindo!!</b>, </h1> <br><br> <h2>esse site é...</h2>')
})




//Próx do let i e aki, tem o msm resultado?
// app.use('/ola',(req, res) => {
//     i++
//     console.log(`Será chamado!!${i}`)
// })


app.use('/ola',(req, res) => {
    console.log(`Depois ...${i}`)
})

app.listen(3000, () => {
    console.log("Backend Executando 2!!")
} )