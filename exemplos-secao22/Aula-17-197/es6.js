// varável let
var escopoGlobal = "Escopo Global";
function fn(){
    var escopoLocal = "Escopo Local da Função fn";
    escopoLocal2 = "Escopo Local da função fn 2";
}
fn(); // escopoLocal2 apesar de ser definida dentro da função, é de escopo global;
console.log(escopoGlobal);
// Não irá funcionar pois a variavel é de escopo local console.log(escopoLocal);
console.log(escopoLocal2); // Ela é definida na função e por não ter modificador sofre hosting e é colocada no escopo local
if(true){
    //var localBloco = "Variável no escopo de bloco"; //Funcionará, porém é uma má prática usar variáveis de escopo de bloco com o modificador var - usar sempre let
    let localBloco = "Variável no escopo de bloco"; // Boa prática
}
//console.log(localBloco); - Não ira funcionar pois é uma variável com escopo de bloco

var nome = "Jessica";
var nome = "João das Neves";
console.log(nome);//Funciona, pois é um var

let idade = 32;
//let idade = 65; //Não pode declarar um let com o mesmo nome duas vezes; - TDZ
console.log(idade); 
console.log(produto);
var produto = "Sofri hosting";

//console.log(produto2); - Não funciona pois let não sofre hosting; - TDZ
let produto2 = "Não sofro hosting";

//Const - Todos os outros exemplos acima tambem valem para o const
{
    const juros = 13;
    console.log(juros);
}
//console.log(juros) - Não funciona pois o const é uma variável com escopo de bloco

/*
const x;
x = 15;
Por ser uma constante deve ser inicializada com um valor;
*/

const tipoUsuario = "admin";
console.log(tipoUsuario);
//tipoUsuario = "dev"; - por ser uma constante não é possível redefinir o seu valor;
//console.log(tipoUsuario);
const pessoa = {
    nome: "Jessica",
    cpf: "12346881845"
}
console.log(pessoa);
/*
pessoa = {
    nome: "João",
    cpf: "231568745"
}
console.log(pessoa);
Por ser uma constante não é possivel atribuir outro valor;
*/

pessoa.nome = "João Snow"; // é possivel alterar as propriedades, mas não o objeto
console.log(pessoa);

Object.defineProperties(pessoa,{
    "nome": {writable: false} //Caso queira que alguma propriedade não possa ser modificada
})
pessoa.nome = "Demetrius";
console.log(pessoa);
Object.freeze(pessoa); // Caso queira que o objeto inteiro nao seja modificado
pessoa.nome = "Demetrius";
pessoa.cpf = "00000000000";
console.log(pessoa);

//Map - Parte 1
var nome = "Jessica",
    numero = 21,
    ativo = true,
    itens = ["prod1","prod2","prod3"],
    funcao = function(){
        console.log("Sou uma função");
    },
    objeto = {nome: "pessoa", cpf:"21352132"},
    expRegular = /teste/gi;
//Declarar um map
const map = new Map();
//Adicionar itens
map.set("nome", nome);
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
map.forEach(function(valor,chave,map){
    console.log(chave,"-",valor);
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
while((chave = chaves.next().value)){
    console.log("Chave -",chave);
}

let valores = map.values();
console.log(valores);
console.log(typeof valores);
console.log(valores.next());
console.log(valores.next().value);
let valor = undefined;
while((valor = valores.next().value)){
    console.log("valor -",valor);
}

let chavesValores = map.entries();
console.log(chavesValores);
console.log(typeof chavesValores);
console.log(chavesValores.next());
console.log(chavesValores.next().value);
let chaveValor = undefined;
while((chaveValor = chavesValores.next().value)){
    console.log("chaveValor -",chaveValor);
}

//Limpar o map
console.log(map.clear());
console.log(map.size);

//WeakMap - Parte 1