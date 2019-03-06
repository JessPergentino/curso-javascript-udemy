import ConfigClass from "../../ConfigClass";

const caminho = `${ConfigClass.getUrlApi().toString()}/portifolio`;

export default class PortifolioModel {
    constructor() {
    }

    static getTodos() {
        return fetch(caminho).then(response => {
            if (response.status >= 400) {
                throw new Error("Erro Server");
            }

            return response.json();
        })
    }
}