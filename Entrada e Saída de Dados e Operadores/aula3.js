/* Arquivo JS aula 03 Operadores e Operações */

let n1 = 10;
let n2 = 2;
let n3 = "2" ;//String

//vamos escrever os valores iniciados acima na tela index.html
document.write('Valores iniciados <br>')
document.write(`n1 = ${n1} <br>`); 
document.write(`n2 = ${n2} <br>`);
document.write(`n3 = "${n3}" <br><br>`);

console.log(n1+n2);
console.log(n1-n2);
console.log(n1*n2);
console.log(n1/n2);
console.log(n1%n2);

document.write('1- Operações matemáticas <br>')
document.write(`1.1) Soma: ${n1} + ${n2} = ${n1+n2} <br>`);
document.write(`1.2) Subtração: ${n1} - ${n2} = ${n1 - n2} <br>`);
document.write(`1.3) Multiplicação: ${n1} x ${n2} = ${n1*n2} <br>`);
document.write(`1.4) Divisão: ${n1} / ${n2} = ${n1/n2} <br>`);
document.write(`1.5) Resto: ${n1} % ${n2} = ${n1%n2}`);
document.write('<br><br>')

console.log(1)
console.log(n2 == n3); //igual a
console.log(n2 === n3); // identico a
console.log(n1 != n3); // diferente de nao =
console.log(n2 !== n3); // nao é identido
console.log(n1 > n2); // n1 maior que n2
console.log(n1 < n2); // n1 menor que n2
console.log(n1 >= n2); //n1 maior ou igual a n2
console.log(n1 <= n2); //n1 menor ou igual a n2

document.write('2- Operadores de comparação <br>');
document.write(`2.1) Igualdade: ${n1} == ${n3}: ${(n2 == n3)} <br>`);
document.write(`2.2) Igualdade Estrita: ${n2} === "${n3}": ${(n2 === n3)}<br>`);
document.write(`2.3) Diferente: ${n2} != ${n1}: ${n2 != n1} <br>`);
document.write(`2.4) Não é identico: ${n2} !== ${n3}: ${n2!==n3}<br>`);
document.write(`2.5) Maior que: ${n1} > ${n2}: ${n1>n2}<br>`);
document.write(`2.6) Menor que: ${n1} < ${n2}: ${n1<n2}<br>`);
document.write(`2.7) Maior ou igual: ${n1} >= ${n2}: >= ${n1 >= n2}<br>`);
document.write(`2.8) Menor ou igual: ${n1} <= ${n2}: ${n1 <= n2}<br><br>`);

let a = true;
let b = false;

console.log(a && b); // E AND
console.log(a || b); // OU OR
console.log(!a);
console.log(!b);

document.write('3- Operadores Lógicos <br>');
document.write(`a = ${a}<br>`);
document.write(`b = ${b}<br><br>`);
document.write(`3.1) E/AND: a && b: ${a && b} <br>`);
document.write(`3.2) OU/OR: a || b: ${a || b} <br>`);
document.write(`3.3.1) NAO/NOT: !a: ${!a} <br>`);
document.write(`3.3.2) NAO/NOT: !b: ${!b} <br>`);