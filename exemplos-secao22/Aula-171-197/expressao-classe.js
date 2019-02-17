//Classe não sofre hosting

//let objVeiculo = new Veiculo("Carro"); - Deve ser instanciado dps da classe

class Veiculo{
    constructor(tipo){
        this.tipo = tipo;
    }

    tipoUpper(){
        console.log("Tipo:",this.tipo.toUpperCase());
    }
}

let objVeiculo = new Veiculo("Carro");
objVeiculo.tipoUpper();

//Expressão para criar Classe
const Carro = class{ //Classe Anonima
    constructor(placa){
        this.placa = placa;
    }
}

const Carrov2 = class extends Veiculo{ //Classe Anonima
    constructor(tipo,placa){
        super(tipo);
        this.placa = placa;
    }

    getVeiculo(){
        console.log(`Tipo: ${this.tipo}, Placa: ${this.placa}`)
    }
}

let objCarro = new Carrov2("carro", "JSO1235");
objCarro.getVeiculo();