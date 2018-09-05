//Function

function string() {
    var string = new String("Jessica das Neves Pergentino");
    var outraString = new String(" + Outra String Qualquer + ");
    var maisUmaString = new String(" + Mais outra String Qualquer");

    console.log("Tipo do Objeto:", typeof string, "-", typeof string.toString());
    for (const key in string) {
        console.log("Index:", key, "-", "Valor:", string[key]);
    }

    console.log("Valor do Indice:", string.charAt("12"), "- Codigo do indice:", string.charCodeAt("12"));
    console.log("Indice da String:", string.indexOf("t"), "- Ultimo Indice:", string.lastIndexOf("a"));
    console.log(string.concat(outraString, maisUmaString));
    console.log(string.sub());
    console.log(string.sup());
    console.log("Parte da String:", string.substr("12", "5"));
    console.log("Parte da String:", string.substring("18", "28"));
    console.log("Substituindo:", string.replace(/e/g, "&"));
    console.log("Função CallBack:");

    var replace = string.replace(/s/g, function (x) {
        return "$";
    });

    console.log(replace);

    console.log("Quebrar a String:");
    console.log(string.split());
    console.log(string.split(""));
    console.log(string.split(" "));
    console.log(string.split(" ",1));
    console.log(string.split("s"));
    console.log(string.split(/das/g));

    console.log("Caixa Alta:", string.toUpperCase());
    console.log("Caixa Baixa:", string.toLowerCase());

    var resultado = outraString.match(/a/g);
    console.log("Pesquisa:", resultado, "- Tipo:", Object.prototype.toString.call(resultado));
    resultado = outraString.search(/a/g);
    console.log("Pesquisa:", resultado, "- Tipo:", Object.prototype.toString.call(resultado));

    console.log("Começa com P?:", string.startsWith("P", 18));
    console.log("Sem Espaço:", string.concat(outraString.trim()));

    console.log("Tipo Primitivo:", typeof string.valueOf());
    console.log("Repetir 3 Vezes:", string.repeat(3));

}

function number(){
    var number = new Number(50.789);

    console.log("Tipo:", typeof number, "-", typeof number.toString(), "-", typeof Object.prototype.toString.call(number), "-", typeof number.valueOf());
    console.log("Casas Decimais:", number.toFixed(2), "-",typeof number.toFixed(2));

    var float = Number.parseFloat(number.toFixed(2));
    console.log("Numero convertido:", float, "-", typeof float);
    console.log("Convertido para Inteiro:", Number.parseInt(float), "-", typeof float);

    var v1 = 50.456;
    var v2 = Number.NaN;
    var v3 = true;
    var v4 = 25;
    var v5 = Infinity;

    console.log("É Inteiro?:", Number.isInteger(v1), Number.isInteger(v2), Number.isInteger(v3), Number.isInteger(v4));
    console.log("É NaN?:", Number.isNaN(v1), Number.isNaN(v2), Number.isNaN(v3), Number.isNaN(v4));
    
    console.log("Digitos:", number.toPrecision(3));
    console.log("É Finito?:", Number.isFinite(v1), Number.isFinite(v2), Number.isFinite(v3), Number.isFinite(v4), Number.isFinite(v5));

    console.log("3/84",Number.isFinite(3/84));
    console.log("3/0",Number.isFinite(3/0));

}

function boolean(){
    var boolean = true;
    var b = new Boolean(false);

    console.log("Tipo:", typeof boolean, "-", typeof b, "/", typeof boolean.toString(), "-", typeof b.toString(), "/", typeof boolean.valueOf(), "-", typeof b.valueOf())
}
//Execução
//string();
//number();
boolean();
