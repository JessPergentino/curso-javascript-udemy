function arrayLiteralConstrutor(){
    var arrayLiteral1 = [];

    arrayLiteral1[0] = "Elemento 1";
    arrayLiteral1.push("Elemtento 2");

    console.log(arrayLiteral1);

    var arrayLiteral2 = [
        1,2,3
    ]

    console.log(arrayLiteral2);
    console.log(arrayLiteral2[0]);
    console.log(arrayLiteral2[2]);
    console.log(arrayLiteral1.length, arrayLiteral2.length);

    var arrayContrutor = new Array();
    var arrayContrutor2 = new Array("Elemtento1", "Elemento2", "Elemento3", "Elemento4");
    console.log(arrayContrutor, arrayContrutor2);

    var arrayContrutor3 = new Array(2);
    console.log(arrayContrutor3);
    console.log(arrayContrutor3[0]);
    console.log(arrayContrutor3[1]);
    console.log(arrayContrutor3.length);
    arrayContrutor3[0] = 1;
    arrayContrutor3[1] = 2;
    console.log(arrayContrutor3);

}

//arrayLiteralConstrutor();

function arrayTipagemFraca(){
    var nome = "Jessica";

    var TipagemFraca = [
        "Elemento 1",
        2,
        false,
        {nome: "Demetrius", idade: 26, namorada: {nome: nome, idade: 21}},
        [1,2,3,4,5, ["a", "b", "c"]],
        function(a,b){
            return a-b;
        }
    ]

    console.log("Array",TipagemFraca);
    console.log("1º Elemento:",TipagemFraca[0]);
    console.log("3º Elemento:",TipagemFraca[2]);
    console.log("4º Elemento:",TipagemFraca[3]);
    console.log("4º Elemento - Proriedade namorada - Propreidade Nome:",TipagemFraca[3].namorada.nome);
    console.log("5º Elemento: ",TipagemFraca[4]);
    console.log("5º Elemento - Posição 2:",TipagemFraca[4][2]);
    console.log("5º Elemento - Posição 5 - Posição 1:",TipagemFraca[4][5][1]);
    console.log("6º Elemento - Passando parametro:",TipagemFraca[5](50,25));

}
arrayTipagemFraca();