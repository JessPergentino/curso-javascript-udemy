//Simulando um error com o throw
console.log("Linha 1 - Executada");
//throw new Error("Simulação de um Error");
console.log("Linha 2 - Executada?");

//Exemplo de Erro - Bloco try/catch/finally
function divisao(a,b){
return a.metodo() / b;
}

try {
    console.log("Rodando o código que pode dar erro");
    console.log(divisao(24, new Array()));
} catch (error) {
    //console.log(error); - exibi o erro da mesma forma que o stack
    console.log(error.name); // Tipo do Erro
    console.log(error.message);// Descrição
    console.log(error.stack);// Detalhes
}finally{
    console.log("Bloco de código que sempre é executado");
}
