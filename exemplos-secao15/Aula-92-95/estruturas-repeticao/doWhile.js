//Function

function calculoComissão(){
    var meta = 10;
    var vendasRealizadas = 15;
    var comissao = 0;

    do {
        if(vendasRealizadas >= meta){
            console.log("Comissão:", ++comissao);
            if(comissao == 10) break;
        }else{
            console.log("Comissão Fixa:", comissao+=5);
            break;
        }
    } while (comissao < vendasRealizadas);
}

//Execução
calculoComissão();