class PessoaClass {
    nome: string;

    constructor(pessoa: string){
        //Tipagem de dado - nome: string
        this.nome = pessoa;
    }

    exibirNome(){
        return "Olá meu nome é " + this.nome;
    }
}

let objPessoa = new PessoaClass("Jessica");

console.log(objPessoa.exibirNome());