//Classes com métodos estaticos e de Instacia
class API{
    constructor(nome){
        this.nome = nome;
        this.status = "offline";
    }

    conectar(){
        this.status = "online";
        console.log("API conectada....");
    }

    /*static getStatus(){  - Não pode ser acessado atraves da instancia
        console.log("Status:",this.status);
    }*/

    static getStatus(api){
        console.log("Status:",api.status);
    }
}

let objApi = new API("vendas");
objApi.conectar();
//objApi.getStatus();  - Não pode ser acessado atraves da instancia
API.getStatus(objApi)