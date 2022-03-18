// Uma factory retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}

// module.exports = {
//     valor: 1,
//     inc() {
//         this.valor++
//     }
// }

// function criarProduto(nome, preco) {
//     return {
//         nome,
//         preco,
//         desconto: 0.1
//     }
// }