//Conversão Automatica
console.log(23 + "Trinta"); // Prioridade a String
console.log(55 + "45"); // Prioridade a String
console.log(10 / "2");
console.log("3" * "10");
console.log("15" / {valor:3});

//Conversão Explicita
console.log(Number("27"));
console.log(typeof Number("27"));

var arrayDeTipos = ["Maria", "", "5.6", 1, 0, -0, -1, 10, 10.5, true, false, null, undefined, NaN, Infinity, 
-Infinity, [], [1,2,"C#"], function(){return 10;}];

converteTipo(arrayDeTipos);

function converteTipo(tipos){

    try {
        for (var index = 0; index < tipos.length; index++) {
            var tipo = tipos[index];
            console.log("####>>>>>>Valor: ", tipo, " -> Tipo dado: ", typeof tipo);
            console.log("Para String: ", String(tipo), " - Tipo: ", typeof String(tipo));
            console.log("Para Number: ", Number(tipo), " - Tipo: ", typeof Number(tipo));
            console.log("Para Boolean: ", Boolean(tipo), " - Tipo: ", typeof Boolean(tipo));
            console.log("Para Object: ", Object(tipo), " - Tipo: ", typeof Object(tipo));
            console.log("\n");
        }     
    } catch (error) {
        console.log("Ocorreu um erro! :(");
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    }      
}