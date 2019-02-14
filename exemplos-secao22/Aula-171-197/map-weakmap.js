//Map - Parte 1
var nome1 = "Jessica",
    numero = 21,
    ativo = true,
    itens = ["prod1", "prod2", "prod3"],
    funcao = function () {
        console.log("Sou uma função");
    },
    objeto = { nome: "pessoa", cpf: "21352132" },
    expRegular = /teste/gi;
//Declarar um map
const map = new Map();
//Adicionar itens
map.set("nome", nome1);
map.set(123, numero);
map.set(ativo, false);
map.set(itens, itens);
map.set(funcao, funcao);
map.set(objeto, 12465);
let exp = map.set(expRegular, expRegular);
console.log("Exibir o retorno e o tipo");
console.log(exp, Object.prototype.toString.call(exp));

exp.set("novo elemento", 123456);
console.log(map == exp);
console.log(map);
console.log(map.size);

//Pegar os valores do map
let elemento1 = map.get("nome");
let elemento2 = map.get(123);
let elemento3 = map.get(ativo);
let elemento4 = map.get(itens);
let elemento5 = map.get(funcao);
let elemento6 = map.get(objeto);
let elemento7 = map.get(expRegular);

console.log(elemento1, typeof elemento1);
console.log(elemento2, typeof elemento2);
console.log(elemento3, typeof elemento3);
console.log(elemento4, typeof elemento4);
console.log(elemento5, typeof elemento5);
console.log(elemento6, typeof elemento6);
console.log(elemento7, typeof elemento7);
console.log(map.get("uma chave qualquer"));

//Map - Parte 2
//deletadando um elemento
let retorno = map.delete("nome");
console.log(retorno);
console.log(map.delete(123));
console.log(map.delete("chave q nao existe"));
//Iteração sobre o map
map.forEach(function (valor, chave, map) {
    console.log(chave, "-", valor);
})
//Verificando uma chave
console.log(map.has(funcao));
console.log(map.has("nome"));
console.log(map.has("chave q nao existe"));
map.set("chave q nao existe", "Agora existe");
console.log(map.has("chave q nao existe"));
console.log(map);

//Metodos keys, values e entries
let chaves = map.keys();
console.log(chaves);
console.log(typeof chaves);
console.log(chaves.next());
console.log(chaves.next().value);
let chave = undefined;
while ((chave = chaves.next().value)) {
    console.log("Chave -", chave);
}

let valores = map.values();
console.log(valores);
console.log(typeof valores);
console.log(valores.next());
console.log(valores.next().value);
let valor = undefined;
while ((valor = valores.next().value)) {
    console.log("valor -", valor);
}

let chavesValores = map.entries();
console.log(chavesValores);
console.log(typeof chavesValores);
console.log(chavesValores.next());
console.log(chavesValores.next().value);
let chaveValor = undefined;
while ((chaveValor = chavesValores.next().value)) {
    console.log("chaveValor -", chaveValor);
}

//Limpar o map
console.log(map.clear());
console.log(map.size);

//WeakMap - Parte 1
const weakMap = new WeakMap();

let objeto1 = { teste1: "teste1" };
let objeto2 = { teste2: "teste2" };
let objeto3 = { teste3: "teste3" };
let objeto4 = { teste4: "teste4" };

//weakMap.set("chave1", "chave1"); - Não funciona, pois o weakSet só recebe objetos como cahve
weakMap.set(objeto1, objeto1);
weakMap.set(objeto2, "objeto2");
weakMap.set(objeto3, objeto3);
weakMap.set(objeto4, "objeto4");

console.log(weakMap.get(objeto1));
console.log(weakMap.get(objeto2));
console.log(weakMap.get(objeto3));
console.log(weakMap.get(objeto4));

objeto1 = null;
console.log(weakMap.get(objeto1));

console.log(weakMap.has(objeto2));
console.log(weakMap.has("Qual quer chave"));
console.log(weakMap.delete(objeto2));
console.log(weakMap.delete("Chave inexistente"));
