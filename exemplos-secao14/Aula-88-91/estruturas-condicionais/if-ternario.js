var matricula = "matriculado";

var mensagem = matricula == "matriculado" ? "Matricula: 456789123" : "Aluno não Matriculado";
console.log(mensagem);

matricula = "Não matriculado";
var mensagem2 = matricula == "matriculado" ? "Matricula: 456789123" : (matricula == "Não matriculado" ? "Fazer matricula?" : "Matricula não encontrada");
console.log(mensagem2);