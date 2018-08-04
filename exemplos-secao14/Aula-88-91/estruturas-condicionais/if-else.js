function ifElse(){
    var condicao = true;

    if(condicao) console.log("Primeiro if - True");

    if (condicao) {
        console.log("Segundo if - True");
    }

    if (condicao) {
        console.log("Primeiro if else - True");
    } else {
        console.log("Primeiro if else - False");
    }

    condicao = false;

    if(condicao)
    console.log("Segundo if else - True");
    else
    console.log("Segundo if else - False");
}

function ifElseIf(){
    var nome = "Jessica";


    if (nome == "jessica") {
        console.log("Primeira Condição");
    } else if (nome == "JESSICA"){
        console.log("Segunda Condição");
    } else if (nome == "jessicA") {
        console.log("Terceira Condição");
    }else if(nome == "Jessica"){
        console.log("Quarta Condição");
    }else{
        console.log("Nenhuma Condição");
    }

    var sobrenome = "Pergentino"
    
    if (nome == "Jessica") {
        if(sobrenome == "Pergentino"){
            console.log("Nome Completo: ", nome, sobrenome);
        }else{
            console.log("Primeiro Nome: ", nome);
        }
    } else {
        console.log("Nome não Encontrado");
    }

    var operando1 = 4;
    var operando2 = 10;

    if (operando1 == 44 && operando2 == 10) {
        console.log("Primeiro if - True")
    } else {
        console.log("Primeiro if - False");
    }

    if (operando1 == 44 || operando2 == 10) {
        console.log("Segundo if - True")
    } else {
        console.log("Segundo if - False");
    }

    if (operando1 >= operando2 ) {
        console.log("Terceiro if - True")
    } else {
        console.log("Terceiro if - False");
    }

    if (operando1 < operando2) {
        console.log("Quarto if - True")
    } else {
        console.log("Quarto if - False");
    }

    if (!operando1 == operando1) {
        console.log("Quinto if - True")
    } else {
        console.log("Quinto if - False");
    }
}
ifElseIf();
