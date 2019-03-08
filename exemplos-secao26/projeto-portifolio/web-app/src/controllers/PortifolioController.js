import PortifolioModel from "../models/portifolio/PortifolioModel";
import PortifolioClass from "../models/portifolio/PortifolioClass";

let divMsg = window.document.getElementById("msg");
let divPortifolios = window.document.getElementById("portifolios");
let formulario = window.document.getElementById("form");

let objPortifolioController;

class PortifolioController {

    getTodosTable(divPortifolios) {
        console.log("GetTodos");
        let promise = new Promise(function (resolve, reject) {
            let promiseFetch = PortifolioModel.getTodos();

            promiseFetch.then(response => {
                resolve(response);
            })
        })

        promise.then(response => {
            let dados = "";

            if (response.erro) {
                this.exibirMsgAlert(response.msg, "erro");
            } else {
                dados += `<div class="table-responsive">
                        <table class= "table table-striped table-bordered table-hover table-sm">
                            <thead class="table-dark">
                                <tr>
                                    <th>Código</th>
                                    <th>Descrição</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>`

                for (const servico of response.dados) {
                    dados += `<tr>
                            <td>${servico.id}</td>
                            <td>${servico.descricao}</td>
                            <td><button type="button" class="btn btn-primary btn-editar" data-id="${servico.id}">Editar</button></td>
                            <td><button type="button" class="btn btn-primary btn-excluir" data-id="${servico.id}">Excluir</button></td>
                    </tr>`;
                }

                dados += "</tbody></table></div>";
                divPortifolios.innerHTML = dados;

                let btnsEditar = document.querySelectorAll(".btn-editar");
                let btnsExcluir = document.querySelectorAll(".btn-excluir");

                btnsEditar.forEach(function (item) {
                    item.addEventListener("click", event => {
                        objPortifolioController.limparMsgAlert();
                        let id = event.target.getAttribute('data-id');
                        objPortifolioController.prepararEditar(id);
                    });
                })

                btnsExcluir.forEach(function (item) {
                    item.addEventListener("click", event => {
                        objPortifolioController.limparMsgAlert();
                        let id = event.target.getAttribute('data-id');
                        objPortifolioController.deletar(id);
                    });
                })
            }

        }).catch(response => console.log("erro catch:", response));
    }

    prepararEditar(id) {
        console.log("Preparar Editar", id);
    };

    editar(formulario) {

    }

    adicionar(formulario) {
        let descricao, detalhes;
        descricao = formulario.descricao.value;
        detalhes = formulario.detalhes.value;

        if (descricao && detalhes) {
            let objPortifolioClass = new PortifolioClass(null, descricao, detalhes);

            let promise = new Promise(function (resolve, reject) {
                let promiseFetch = PortifolioModel.adicionar(objPortifolioClass);

                promiseFetch.then(response => {
                    resolve(response);
                })
            })

            promise.then(response => {
                if (response.erro) {
                    this.exibirMsgAlert(response.msg, "erro");
                } else {
                    objPortifolioController.getTodosTable(divPortifolios);
                    objPortifolioController.exibirMsgAlert(response.msg, "sucesso");
                    objPortifolioController.ocultarElemento("formulario");
                    objPortifolioController.exibirElemento("listagem");
                    objPortifolioController.limparCamposForm(formulario);
                }
            }).catch(response =>{
                console.log("Erro catch", response);
            });

        } else {
            this.exibirMsgAlert("Por favor preencher todos os campos.", "erro")
        }


    }

    deletar(id) {
        console.log("Deletar", id);
    };

    ocultarElemento(elemento) {
        document.getElementById(elemento).style.display = "none";
        console.log("Ocultar")
    }

    exibirElemento(elemento) {
        document.getElementById(elemento).style.display = "block";
    }

    limparCamposForm(form) {
        form.id.value = "";
        form.descricao.text = "";
        form.detalhes.text = "";
    }

    exibirMsgAlert(msg, tipo) {
        let dados = "";
        if (tipo == "sucesso") {
            dados = `< div class="alert alert-success alert-dismissible fade show" role = "alert" >
                        <strong>${msg}</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
          </div > `;
        } else if (tipo == "erro") {
            dados = `< div class="alert alert-danger alert-dismissible fade show" role = "alert" >
                        <strong>${msg}</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
          </div > `;
        }

        divMsg.innerHTML = dados;
    }

    registrarEvents() {
        document.getElementById('btn-exibir-formulario').addEventListener('click', function () {
            objPortifolioController.limparMsgAlert();
            objPortifolioController.ocultarElemento('listagem');
            objPortifolioController.exibirElemento('formulario');
        })

        document.getElementById('btn-cadastrar-portifolio').addEventListener('click', function () {
            event.preventDefault();
            objPortifolioController.limparMsgAlert();
            if (formulario.id.value) {
                objPortifolioController.editar(formulario);
            } else {
                objPortifolioController.adicionar(formulario);
            }
        })

        document.getElementById('btn-cancelar-operacao').addEventListener('click', function () {
            objPortifolioController.limparMsgAlert();
            objPortifolioController.limparCamposForm(formulario);
            objPortifolioController.ocultarElemento('formulario');
            objPortifolioController.exibirElemento('listagem');
        })
    }

    limparMsgAlert() {
        divMsg.innerHTML = "";
    }
}

function main() {
    objPortifolioController = new PortifolioController();
    objPortifolioController.ocultarElemento("formulario");
    objPortifolioController.getTodosTable(divPortifolios);
    objPortifolioController.registrarEvents();
    console.log("Main");
}

window.onload = main;