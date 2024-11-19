//Importações do projeto
let teclado = require('prompt-sync')(); 

//Entrada de dados
let valor1 = teclado('Digite o primeiro valor: ');
let valor2 = teclado('Digite o segundo valor: ');

//Processamento
num1 = parseFloat(valor1);
num2 = parseFloat(valor2)
let soma = num1 + num2;

// SAÍDA DE DADOS
console.log(`Resultado: ${soma}`)


