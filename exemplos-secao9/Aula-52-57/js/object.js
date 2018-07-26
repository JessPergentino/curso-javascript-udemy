//Declaração Literal;
var pessoa = {nome: "Jessica", idade: 21, CNH: false};

//Declaração por Construtor;
var carro = new Object();
carro.placa = "JKL-5487";
carro.cor = "Azul"
carro.portas = 2
carro.disponibilidade = true;

//Acessando os objetos;
//Acessando Pessoa:
console.log("Candidato: ");
console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);
console.log("Possui CNH: " + pessoa.CNH);

//Acessando Carro:
console.log("Carro: ");
console.log("Placa: " + carro.placa);
console.log("Cor: " + carro.cor);
console.log("Portas: " + carro.portas);
console.log("Carro Disponivel: " + carro.disponibilidade);