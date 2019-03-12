//ES5
var nome;

console.log("nome:", nome);
console.log("typeof:", typeof nome);

var obj = {nome: "Pedro"};
var obj2 = obj;
console.log("obj", obj);
console.log("obj2", obj2);

obj2 = null;
console.log("obj", obj);
console.log("obj2", obj2);

//Typescript
let nome2: undefined = undefined; // Não faz sentido, está variavel só irá receber udefined;
let nomeNull: null = null; // Não faz sentido, está variavel só irá receber null;
console.log("nome:", nome2);
console.log("typeof:", typeof nome2);

console.log("nomeNull:", nomeNull);
console.log("typeof:", typeof nomeNull);
