

//Operadores Aritméticos
let soma = 10 + 5; //Resultado: 15
let subtracao = 20 - 8; //Resultado: 12
let multiplicacao = 3 * 6; //Resultado: 18
let divisão = 15 / 3; //Resultado: 5
let resto = 8 % 2; //Resultado: 0

//Operadores de Atribuição 
let z = 5; // Atribuição simples
z += 3; // x = x + 3 (x é atualizado para 8)
z -= 2; // x = x - 2 (x é atualizado para 6)
z *= 4; // x = x * 4 (x é atualizado para 24)
z /= 6; // x = x / 6 (x é atualizado para 4)
z %= 3; // x = x % 3 (x é atualizado para 1)

//Operadores de comparação
let a = 10;
let b = 5;

console.log(a == b); // false
console.log(a != b); // true
console.log(a > b); // true
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // false
 
//Operadores lógicos

let idade2 = 25;
let possuiCarteira = true;

if(idade2 >= 18 && possuiCarteira == true){
    console.log("Pode dirigir!");
}

let nota = 7.9;
let frequencia = 85/100;

if(nota >= 7 || frequencia >= 75){
    console.log("Você está aprovado!");
}

let w = true;
let k = !w; 
console.log(k)
