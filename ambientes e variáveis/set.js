console.log("SET")
//TIPO SET

let meuSet = new Set();

meuSet.add(1); //meuSet [1]
meuSet.add(5); //meuSet [1, 5]
meuSet.add(5); //5 já foi adicionado, portanto, meuSet [1, 5]
meuSet.add("texto"); //meuSet [1, 5, "texto"]

let o = {
    a: 1, 
    b: 2
};

meuSet.add(o); 

meuSet.add({a: 1, b: 2}); //o está referenciando outro objeto

meuSet.has(1); //true
meuSet.has(3); //false, 3 não foi adicionado ao Set (conjunto)
meuSet.has(5); //true
meuSet.has(Math.sqrt(25)); //true
meuSet.has("Texto".toLowerCase()); //true
meuSet.has(o); // true

meuSet.size; //5

meuSet.delete(5); //remove o 5 do set
meuSet.has(5); //false, 5 foi removido

meuSet.size; //4, pois removemos um valor

console.log(meuSet); //Set {1, 'texto', {a: 1, b: 2}, {a: 1, b: 2}}

//loga os itens na ordem: 1, "texto"...
for(let item of meuSet) console.log(item);
for(let item of meuSet.keys()) console.log(item);
for(let item of meuSet.values()) console.log(item);
//(key e values são os mesmos aqui)
for (let [key, value] of meuSet.entries()) console.log(key);

meuSet.add(document.body);
meuSet.has(document.querySelector("body"));

let meuSet2 = new Set();

meuSet2.add(1);
meuSet2.add(2);
meuSet2.add(3);
meuSet2.add(4);
console.log(meuSet2);
console.log(meuSet2.size);

//removendo elementos duplicados no array

const numerosRepetidos = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
let semRepetir = new Set(numerosRepetidos);

console.log(semRepetir);

//transformando set em string
let texto = "índia";
let pais = new Set(texto);

console.log(pais);
console.log(pais.size)