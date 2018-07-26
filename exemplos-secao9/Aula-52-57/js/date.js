//Data Atual - No momento da Interpretação
var data = new Date();
console.log(data);
console.log(typeof data);

//Recebendo Valor Inteiro - baseado em 01-01-1970
var dataValor = new Date(45000);
console.log(dataValor);

//Recebendo uma data especifica em string
var dataString = new Date("1997-02-27");
console.log(dataString);

//Pegar algumas Informações da data
console.log(dataString.getFullYear());
console.log(dataString.getMonth() + 1); // Os meses são representado por indice e começa pelo 0;
console.log(dataString.getDay());
console.log(dataString.getDate());
console.log(data.getHours());
console.log(data.getMinutes());