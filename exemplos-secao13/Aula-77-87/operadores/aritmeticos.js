//Adição e Concatenação
function soma() {
    console.log("Soma: ", 24 + 7);
    console.log("Soma String: ", "5" + "7");
    console.log("Soma Number + String: ", "24" + 17);
    console.log("Concatenação: ", "Jessica" + "Pergentino");

    var numeroString = "45";
    console.log("Tipo: ", typeof numeroString);
    console.log("Tipo: ", typeof +numeroString);

    console.log("Soma com True e False: ", true + false + true);
    console.log("Soma com Null: ", 45 + null);
    console.log("Soma com Undefined: ", 45 + undefined);
    console.log("Soma Decimais: ", 0.45 + 0.2);
    console.log("Soma Decimais Imprecisa: ", 0.4 + 0.2);
}

//Subtração
function subtracao() {
    console.log("Subtração: ", 74 - 25);
    console.log("Subtração Negativos: ", -24 - 12);
    console.log("Subtração Negativos: ", -24 - -12);
    console.log("Subtração Negativos: ", -24 + 12);
    var numero = 41;
    console.log("Negar Número: ", -numero);
    console.log("Subtração com true: ", 23 - true);
    var string = "13";
    console.log("Tipo: ", typeof string);
    console.log("Subtração Decimal: ", 0.7 - 0.4);
    console.log("Subtração Decimal: ", 0.45 - 0.25);
}

//Multiplicação
function multiplicacao() {
    console.log("Multiplicar: ", 4 * 6);
    console.log("Multiplicar String: ", "4" * 5);
    console.log("Multiplicar: ", "Quatro" * 6);
    console.log("Multiplicar - Precedencia: ", 5 + 4 * 7);
    console.log("Multiplicar - Precedencia: ", (5 + 4) * 7);
    console.log("Multiplicar Por Zero: ", 0 * 6);
    console.log("Multiplicar Por Zero: ", 4 * 0);
    console.log("Multiplicar Negativo: ", 4 * -5);
    console.log("Multiplicar True: ", true * 6);
}

//Divisão e Módulo
function divisaoModulo() {
    console.log("Divisão: ", 50 / 2);
    console.log("Divisão Por Zero: ", 5 / 0);
    console.log("Divisão Por Zero: ", 0 / 5);
    console.log("Divisão Negativo Por Zero: ", -7 / 0);
    console.log("Divisão: ", 5 / 10);
    console.log("Divisão Infinito: ", Infinity / Infinity);
    console.log("Divisão String: ", 6 / "2");
    console.log("Divisão String Texto: ", 6 / "Cinco");

    console.log("Módulo(Resto da Divisão): ", 8 % 2);
    console.log("Módulo(Resto da Divisão): ", 5 % 2);
}

//Incremento, Decremento e Exponenciação
function increDecreExpo(){
    var incremento = 5;
    console.log("Número Inicial: ", incremento);
    console.log("Incrementando: ", incremento++);
    console.log("Pós Incremento: ", incremento);
    console.log("Incrementando: ", ++incremento);
    console.log("Pré Incremento: ", incremento);

    console.log("-----------------------------");

    var decremento = 5;
    console.log("Número Inicial: ", decremento);
    console.log("Decrementando: ", decremento--);
    console.log("Pós Decremento: ", decremento);
    console.log("Decrementando: ", --decremento);
    console.log("Pré Decremento: ", decremento);

    console.log("-----------------------------");

    console.log("Exponenciação: ", 3**2);
}
