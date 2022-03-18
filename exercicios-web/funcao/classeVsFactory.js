class Pessoa {
    constructor(nome, sobre) {
        this.nome = nome
        this.sobre = sobre
        this.full = nome+sobre
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
        console.log(`Meu nome é ${this.full}`)
    }
}

const p1 = new Pessoa('José', ' Fernandes')
p1.falar()

const criarPessoa = (nome,sobre) => {
    return {
        falar: () => {
            console.log(`Meu nome é ${nome}`)
            console.log(`Meu nome é ${nome+sobre}`)
        }
    }
}

const p2 = criarPessoa('João', ' Da Silva')
p2.falar()