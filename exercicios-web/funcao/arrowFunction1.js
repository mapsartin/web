let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá1'
}

ola = () => 'Olá2'
ola = _ => 'Olá3' // possui um param
console.log(ola())