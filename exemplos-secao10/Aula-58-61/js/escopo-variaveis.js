//Variáveis de Global
var aluno = "Jessica";
console.log(window.aluno);
var msgMatricula = "Olá " + aluno + " Seja Bem Vindo";
console.log(msgMatricula + " - Escopo Global");

function realizarMatricula(aluno,curso){
    var msgMatricula = "Matricula Realizada com sucesso";
    console.log(msgMatricula, "Escopo Local");
    console.log("O aluno: " + aluno + " Foi matriculado no curso: " + curso);

    function exibirSemestre(){
        var msgMatricula = "2018/2";
        console.log("Semestre Atual: " + msgMatricula);
    }

    exibirSemestre();
}

realizarMatricula("Jessica","Javascript");