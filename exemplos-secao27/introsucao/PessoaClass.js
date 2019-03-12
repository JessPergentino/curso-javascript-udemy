var PessoaClass = /** @class */ (function () {
    function PessoaClass(pessoa) {
        //Tipagem de dado - nome: string
        this.nome = pessoa;
    }
    PessoaClass.prototype.exibirNome = function () {
        return "Olá meu nome é " + this.nome;
    };
    return PessoaClass;
}());
var objPessoa = new PessoaClass("Jessica");
console.log(objPessoa.exibirNome());
