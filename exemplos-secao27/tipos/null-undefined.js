//ES5
var nome;
console.log("nome:", nome);
console.log("typeof:", typeof nome);
var obj = { nome: "Pedro" };
var obj2 = obj;
console.log("obj", obj);
console.log("obj2", obj2);
obj2 = null;
console.log("obj", obj);
console.log("obj2", obj2);
//Typescript
var nome2 = undefined; // Não faz sentido, está variavel só irá receber udefined;
var nomeNull = null; // Não faz sentido, está variavel só irá receber null;
console.log("nome:", nome2);
console.log("typeof:", typeof nome2);
console.log("nomeNull:", nomeNull);
console.log("typeof:", typeof nomeNull);
