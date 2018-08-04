// typeof
var string  = "Jessica";
console.log(typeof string);

var stringCons = new String("Demetrius");
console.log(stringCons instanceof String);

var objeto = {nome: "Objeto",ativo: true};
console.log("peso" in objeto);

var array = ["1","5","7","9"];
console.log(2 in array);

console.log("Acessando Propriedade . : ", objeto.nome);
console.log("Acessando Propriedade [] : ", objeto["ativo"]);

function chamar(){
    return "Fui Chamada"
}

console.log(chamar());

console.log("Deletar Objeto: ", delete objeto.ativo, objeto);
console.log("Deletar Array: ", delete array[3], array);

console.log(void(chamar()));

