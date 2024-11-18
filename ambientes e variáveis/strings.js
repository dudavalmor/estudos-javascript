//const - variavel com valor constante
//let - variavel que podemos alterar valor

//STRINGS

//1- retorna a quantidade de caracters
console.log('STRINGS')
const message1 = 'Hello world!'
console.log(message1)

//2- concatenar strings
const nome = 'Eduarda'
const lastName = 'Valmor'
console.log(`Meu nome é ${nome} ${lastName}`)
console.log('Meu nome é ' + nome + ' ' + lastName)//nao usado mais

//3- deixar toda a string em maiúsculo
console.log(`Meu nome é ${nome.toUpperCase()} ${lastName.toUpperCase()}`)

//4- deixar toda a String em minúsculo
const message2 = 'HELLO WORLD!'
console.log(message2.toLowerCase())

//cortar a string em uma lista
const names = 'Eduarda, João Matheus, Denise, Rodrigo, Luisa, Bianca, Marcella, Bruce, Clara, Deborah'
console.log(names.split(", "))