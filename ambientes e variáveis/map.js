
//TIPO MAP
const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
console.log(map1.get('a'));

map1.set('a', 97);
console.log(map1.get('a'));

console.log(map1.size)

map1.delete('b');
console.log('b foi deletado.')

console.log(map1.size)
