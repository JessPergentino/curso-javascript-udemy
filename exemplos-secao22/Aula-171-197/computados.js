//Propriedades ou Métodos Computadas
//ES5
var objProdutoES5 = {
    nome: "A"
}
objProdutoES5["seq" + 23] = 23;
console.log(objProdutoES5);

//ES6
var objProdutoES6 = {
    nome: "B",
    ["seq" + 12]: 12
}
console.log(objProdutoES6);

let retNum = function(){
    return 268;
}

let nomeProp = "teste";
var objPessoaES6v2 = {
    nome: "c",
    ["seq" + retNum()] : retNum(),
    [nomeProp]: nomeProp
}