//Programação Funcional
function sejaBemVindo() {
    console.log("Seja Bem Vindo ao Curso!");
}

console.log("Chamando Funcção sejaBemVindo();");
sejaBemVindo();

//Programação OO - Declaração e uso do objeto aluno
var aluno = {
    nome: "Jessica",
    sobrenome: "Pergentino",
    curso: "JavaScript",
    infoAluno: function () {
        console.log("Informações do Aluno: ");
        console.log("Nome Completo: " + aluno.nome + " " + aluno.sobrenome);
        console.log("Curso: " + aluno.curso);
    }
}

console.log("Objeto Aluno");
console.log(aluno);

console.log("Acessando propriedade do Aluno");

console.log(aluno.nome);
console.log(aluno.sobrenome);
console.log(aluno.curso);

console.log("Chamando o Metodo do Objeto Aluno");
aluno.infoAluno();
