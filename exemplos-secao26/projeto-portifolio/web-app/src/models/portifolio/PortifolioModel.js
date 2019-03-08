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

    static adicionar(objPortifolioClass) {
        return fetch(caminho,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(objPortifolioClass)
            }
        ).then(response => {
            if (response.status >= 400) {
                throw new Error("Erro Server");
            }
            return response.json();
        })
    }
}