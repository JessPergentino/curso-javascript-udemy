import PortifolioModel from "../models/portifolio/PortifolioModel";
import PortifolioClass from "../models/portifolio/PortifolioClass";

let divMsg = window.document.getElementById("msg");
let divPortifolios = window.document.getElementById("listagem");
let divFormulario = window.document.getElementById("formulario");

let objPortifolioController;

class PortifolioController{

    ocultarElemento(elemento){
        document.getElementById(elemento).style.display = "none";
        console.log("Ocultar")
    }

    exibirElemento(elemento){
        document.getElementById(elemento).style.display = "block";
    }

    limparCamposForm(form){
        form.id.value = "";
        form.descricao = "";
        form.detalhes = "";
    }

    registrarEvents(){

    }
}

function main(){
objPortifolioController = new PortifolioController();
objPortifolioController.ocultarElemento("formulario");
console.log("Main");
}

window.onload = main;