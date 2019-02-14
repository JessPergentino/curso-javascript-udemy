// varável let
var escopoGlobal = "Escopo Global";
function fn() {
    var escopoLocal = "Escopo Local da Função fn";
    escopoLocal2 = "Escopo Local da função fn 2";
}
fn(); // escopoLocal2 apesar de ser definida dentro da função, é de escopo global;
console.log(escopoGlobal);
// Não irá funcionar pois a variavel é de escopo local console.log(escopoLocal);
console.log(escopoLocal2); // Ela é definida na função e por não ter modificador sofre hosting e é colocada no escopo local
if (true) {
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

Object.defineProperties(pessoa, {
    "nome": { writable: false } //Caso queira que alguma propriedade não possa ser modificada
})
pessoa.nome = "Demetrius";
console.log(pessoa);
Object.freeze(pessoa); // Caso queira que o objeto inteiro nao seja modificado
pessoa.nome = "Demetrius";
pessoa.cpf = "00000000000";
console.log(pessoa);
