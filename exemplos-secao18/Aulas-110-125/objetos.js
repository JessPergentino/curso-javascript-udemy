//Objetos Complexos
function objetosComplexosLiteral(){
    var pessoa = {
        nome: "Jessica Pergentino",
        cpf: 789456123,
        dataNascimento: new Date(1997,1,27),
        ativo: true,
        "Propriedade": "Minha Propriedade",
        contatos: [123456789,987654321,123789456,654321987],
        endereco: {rua: "Rua", numero: "564", cep: 468913},
        saudacao: function() {console.log(pessoa.nome)}
    }

    console.log("Propriedades:");;
    console.log("Nome:",pessoa.nome);
    console.log("CPF:",pessoa.cpf);
    console.log("Data de Nascimento:",pessoa.dataNascimento.toLocaleDateString());
    console.log("Ativo:",pessoa.ativo);
    console.log("Propriedade", pessoa.Propriedade);
    for (const iterator of pessoa.contatos) {
        console.log(iterator);
    }
    for (const key in pessoa.endereco) {
       console.log(key, pessoa.endereco[key]);
    }
    pessoa.saudacao();

}

//objetosComplexosLiteral();

function objetosComplexosConstrutor(){
    var produto = new Object();

    produto.nome = "PC"
    produto.preco = 7894.45;
    produto.dimensoes = {largura: "10cm", comprimento: "50cm", altura: "35cm"};
    produto["Memoria Ram"] = "8G";
    var propProduto = "processador";
    produto[propProduto] = "Intel i7 8ª Geração";
    produto[""] = "Placa de Video NVidia, Gravador de cd/dvd, HD 1 Tera, Caixas de Som, Mouse";
    produto["123.456"] = "789.231";

    console.log("Nome do Produto:", produto.nome);
    console.log("Preço do Produto:", produto["preco"]);
    console.log("Dimenssões do Produto:", produto.dimensoes.largura, produto.dimensoes.comprimento, produto.dimensoes.altura);
    console.log("Memoria do Produto:", produto["Memoria Ram"]);
    console.log("Processador do Produto:", produto.processador);
    console.log("Outros do Produto:", produto[""]);
    console.log("Serial do Produto:", produto["123.456"]);

}

//objetosComplexosConstrutor();

function objetosComplexosReferencia(){
    var carro = {modelo: "Ford Fusion", marca: "Ford", portas: 4, direcao: true, automatico: true};
    imprimirObjeto(carro);

    var carro2 = carro;

    imprimirObjeto(carro2);

    carro2.modelo = "Kar";
    carro2.portas = 2;

    imprimirObjeto(carro);
    imprimirObjeto(carro2);

    carro2 = null;

    console.log("Tipo:", typeof carro, carro instanceof Object);

    function imprimirObjeto(objeto){
        for (const key in objeto) {
            if(key == "direcao" || key == "automatico"){
                if(objeto[key] == true)
                console.log(key, "Sim")
                else
                console.log(key, "Não")
            }else{
                console.log(key, objeto[key]);
            }
        }
    }

}

//objetosComplexosReferencia();

function verificarPropriedade(){
    var moto = {modelo: "PCX-300", marca: "Honda", preco: 20000};
    console.log("Prop Existe IN:", "modelo" in moto);
    console.log("Prop Existe IN:", "cilindrada" in moto);
    console.log("Metodo existe IN:", "toString" in moto);

    console.log("Prop Existe hasOwnProperty:", moto.hasOwnProperty("modelo"));
    console.log("Prop Existe hasOwnProperty:", moto.hasOwnProperty("cilindrada"));
    console.log("Metodo existe hasOwnProperty:", moto.hasOwnProperty("toString"));

    delete moto.preco;

    console.log("Prop Existe delete:", moto.hasOwnProperty("preco"));

    var chaves = Object.keys(moto);
    console.log("Propriedades", chaves);
    console.log("Tipo", typeof chaves, Object.prototype.toString.call(chaves), chaves instanceof Array);

    for (const key in moto) {
        console.log(key, moto[key]);
    }

    var valores = Object.values(moto);
    console.log("Values:", valores);
    console.log("Tipo", typeof valores, Object.prototype.toString.call(valores), Array.isArray(valores));

    var array = [1,2,3,4,5,6,7];
    var entriesObjeto = Object.entries(moto);
    var entriesArray = Object.entries(array);
    console.log("Tipo Objeto", typeof entriesObjeto, Object.prototype.toString.call(entriesObjeto), Array.isArray(entriesObjeto));
    console.log("Tipo Array", typeof entriesArray, Object.prototype.toString.call(entriesArray), Array.isArray(entriesArray));

    for (const [chave,valor] of entriesObjeto) {
        console.log(chave,valor);
    }
    
    for (const [chave,valor] of entriesArray) {
        console.log(chave,valor);
    }
}

//verificarPropriedade();

function ObjetosAtributos(){
    var pessoa = {
        _cpf: "123.456.789-00",
        get cpf(){
            return this._cpf;
        },
        set cpf(valor){
            this._cpf = valor;
        }
    }

    pessoa.cpf = "987.654.321-11";
    console.log(pessoa.cpf);
    console.log("Propriedades:", Object.getOwnPropertyDescriptors(pessoa));
}

//ObjetosAtributos();

function definePropertyPropertyIsEnumerable(){
    var barco = {
        nome: "Bela do Mar II",
        motor: 500,
        disponivel: true,
        capitao: "Demetrius"
    }

    console.log("Existe Nome:", "nome" in barco);
    console.log("Iteravel: ", Object.propertyIsEnumerable("motor"), Object.propertyIsEnumerable("toString"), Object.propertyIsEnumerable("length") );

    //imprimir(barco);

    Object.defineProperty(barco, "motor", {
        enumerable: false
    } )

    //imprimir(barco);

    console.log(delete "motor");

    //imprimir(barco);

    barco.disponivel = false;

    //imprimir(barco);

    Object.defineProperty(barco, "disponivel", {
        writable: false
    })

    console.log(barco.disponivel = true);

    imprimir(barco);

    Object.defineProperty(barco, "disponivel", {
        value: true
    });

    imprimir(barco);

    function imprimir(objeto){
        for (const [chave,valor] of Object.entries(objeto)) {
            console.log(chave,valor)
        }
    }

    var exemplar = {};

    Object.defineProperties(exemplar, {
        titulo: {
            value: "Guerra e Paz",
            enumerable: true,
            writable: true
        },
        autor: {
            value: "Alguem Famoso",
            enumerable: true,
            writable: true
        },
        disponivel: {
            value: false,
            enumerable: true,
            writable: false,
            configurable: false
        }
    })

    imprimir(exemplar);

    console.log((exemplar.disponivel = true));
    console.log(delete "disponivel");

    imprimir(exemplar);

    var objeto = {};
    Object.defineProperties(objeto, {
        nome: {
            value: "aslk",
            enumerable: true,
            writable: true,
            configurable: true,
        },
        nome: {
            set: function(parametro){
                this.nome = parametro
            },
            get: function(){
                return this.nome
            }
        }
    });

    imprimir(objeto);
}

//definePropertyPropertyIsEnumerable();

function getOwnPropertyDescriptorGetOwnPropertyDescriptors(){

    

    
} 

