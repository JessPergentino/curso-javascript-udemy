import PortifolioModel from "../models/portifolio/PortifolioModel";

let divPortifolios = window.document.getElementById("div-portifolios");
let objIndexController;

class IndexController {

    getTodosIndex(divPortifolios) {
        let promise = new Promise(function (resolve, reject) {
            let promiseFetch = PortifolioModel.getTodos();

            promiseFetch.then(response => {
                resolve(response);
            })
        })

        promise.then(response => {
            let dados = "";

            for (const servico of response.dados) {
                dados += `<div class="card text-white bg-primary">
                <div class="card-header">
                <h5 class="card-title">${servico.descricao}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text">${servico.detalhes}</p>
                </div>
            </div><br/>`;
            }

            divPortifolios.innerHTML = dados;
        }).catch(response => console.log("Erro catch", response));
    }
}

function main() {
    objIndexController = new IndexController();
    objIndexController.getTodosIndex(divPortifolios);
}

window.onload = main;